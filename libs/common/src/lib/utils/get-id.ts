import { DocumentWithId } from '../models/id-document';

/**
 * Utility function to get id information
 */
export const getId = <DocId extends string>(
  id: DocId | DocumentWithId<DocId>
): DocId => (typeof id === 'string' ? id : id.id);
