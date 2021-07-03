from pontoon.sync.utils import create_parent_directory
import re

from pontoon.sync.exceptions import (ParseError, SyncError)
from pontoon.sync.formats.base import ParsedResource
from pontoon.sync.vcs.models import VCSTranslation


YAML_REGEX = re.compile('([a-zA-Z0-9_\.]+):[0-9]*\s\"(.*)\"|(#.*#*)')

class YamlEntity(VCSTranslation):
    def __init__(self, key, string, order=0):
        super().__init__(
            key=key,
            source_string=string,
            source_string_plural='',
            strings=(
                {None:string} if string is not None and string != '' else {}
            ),
            comments=[],
            fuzzy=False,
            order=order,
            source=[]
        )
    
    def __repr__(self):
        return "<YAMLEntity {key} {strings}>".format(key=self.key.encode("utf-8"), strings=self.strings)

class YamlResource(ParsedResource):
    def __init__(self, path, source_resource=None):
        self.path = path
        self.entities = {}
        self.source_resource = source_resource

        # Copy entities from the source_resource if it's available.
        if source_resource:
            for key, entity in source_resource.entities.items():
                self.entities[key] = YamlEntity(entity.key, None, entity.order)

        try:
            with open(path, 'r', encoding='utf-8')  as f:
                datas = YAML_REGEX.findall(f.read())
        except OSError as err:
            if source_resource:
                return
            else:
                raise ParseError(err)

        for order, data in enumerate(datas):
            if data[0] != '':
                self.entities[data[0]] = YamlEntity(data[0], data[1], order)
            elif data[2] != '':
                self.entities[data[2]] = YamlEntity(data[2], data[2], order)
            else:
                pass
            
    @property
    def translations(self):
       return sorted(self.entities.values(), key=lambda e: e.order)
    
    def save(self, locale):
        if not self.source_resource:
            raise SyncError(
                f"Cannot save Yaml resource {self.path}: No source resource given." 
            )

        file_string = ''
        for entity in self.translations:
            try:
                if entity.key[0] == '#':
                    file_string += "\n" + entity.strings[None] + "\n\n"
                else:
                     file_string += entity.key + ': \"' + entity.strings[None] + "\"\n"
            except KeyError:
                if entity.key[0] == '#':
                    file_string += '\n' + entity.key + '\n\n'
                else:
                    file_string += entity.key + ': \"\"\n'

        create_parent_directory(self.path)

        with open(self.path, 'w', encoding='utf-8') as f:
            f.write(u'\uFEFF')
            f.write('l_english:\n\n')
            f.write(file_string)

def parse(path, source_path=None, locale=None):
    if source_path is not None:
        source_resource = YamlResource(source_path)
    else:
        source_resource = None

    return YamlResource(path, source_resource,)