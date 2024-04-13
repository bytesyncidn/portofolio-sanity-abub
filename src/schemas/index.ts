import { SchemaTypeDefinition } from 'sanity';

import logo from './logo';
import media from './media';

export const schemaTypes = [media,logo];
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [media,logo],
};
