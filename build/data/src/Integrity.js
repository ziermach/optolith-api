"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReferencialIntegrityErrorsForTranslatable = exports.getReferencialIntegrityErrorsWith = exports.getReferencialIntegrityErrors = void 0;
const getReferencialIntegrityErrors = (ids, check) => ids.filter(id => !check(id));
exports.getReferencialIntegrityErrors = getReferencialIntegrityErrors;
const getReferencialIntegrityErrorsWith = (elements, transform, check) => elements.filter(element => !check(transform(element)));
exports.getReferencialIntegrityErrorsWith = getReferencialIntegrityErrorsWith;
const getReferencialIntegrityErrorsForTranslatable = (translatable, checkLocaleId) => (0, exports.getReferencialIntegrityErrors)(Object.keys(translatable.translations), checkLocaleId);
exports.getReferencialIntegrityErrorsForTranslatable = getReferencialIntegrityErrorsForTranslatable;
//# sourceMappingURL=Integrity.js.map