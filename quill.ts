import Quill from './core';

/**
 * Quill by default registers all available formatting modules. See
 * https://github.com/quilljs/quill/blob/773a5539a028e802907327824ed3b7eb5126f5f2/quill.ts for the
 * original implementation.
 *
 * Quill is exported here without registering any formatting modules, because
 * the registration is handled by frontend in our app.
 *
 * Disabling modules in the `formats` setting of Quill options
 * (client side) does not fully blocks their usage.
 * For example, having background color module registered here will allow
 * pasted content with the background color even if `formats` array
 * does not have BG color formatting enabled.
 *
 * For the full list of modules originally included with Quill
 * please see quill.reg.original.ts
 */

export default Quill;
