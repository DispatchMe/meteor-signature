const SIGNATURE_PAD_MAP = new ReactiveVar({});

var signaturePad = class signaturePad {
  constructor(id, options) {
    if (!id) throw new Error('You must specify the id of the signature pad to create.');

    options = options || {};

    this._isEmpty = new ReactiveVar(true);
    this._element = options.element || document.createElement('canvas');

    // Create the signature pad on the specified element.
    this._signature = new window.SignaturePad(this._element, {
      penColor: options.penColor || '#1895cc',
      minWidth: options.minWidth || 0.75,
      maxWidth: options.maxWidth || 3,
      onBegin: () => {
        if (typeof options.onBegin === 'function') options.onBegin();

        this._isEmpty.set(false);
      },
      onEnd: () => {
        if (typeof options.onBegin === 'function') options.onEnd();
      }
    });

    // Add the signature pad to the reactive map.
    var signaturePadMap = SIGNATURE_PAD_MAP.get();

    signaturePadMap[id] = this;

    SIGNATURE_PAD_MAP.set(signaturePadMap);
  }

  /**
   * Clear the signature pad.
   */
  clear() {
    this._isEmpty.set(true);

    this._signature.clear();
  }

  /**
   * Get the current signature as a base64 image.
   * @return {String} The signature as a base64 image.
   */
  getSignature() {
    return this._signature.toDataURL();
  }

  /**
   * Reactively determine if the signature pad is empty.
   * @return {Boolean} Whether or not the signature pad is empty.
   */
  isEmpty() {
    return this._isEmpty.get();
  }

  /**
   * Resize the signature pad based on the device pixel ratio.
   */
  resize() {
    var ratio = Math.max(window.devicePixelRatio || 1, 1);

    // Adjust the width and height of the canvas based on the device pixel ratio.
    this._element.width = this._element.offsetWidth * ratio;
    this._element.height = this._element.offsetHeight * ratio;

    // Scale the canvas based on the device pixel ratio.
    this._element.getContext('2d').scale(ratio, ratio);

    // Clear the canvas now that it has been scaled.
    this.clear();
  }
};

/**
 * Create or get a signature pad based on an id.
 * @param {String}         id                The id of the signature pad.
 * @param {[Object]}       options
 *        {[HTML Element]} options.element   The HTML element to add the signature pad to.
 *        {[String]}       options.penColor  The color of the pen stroke.
 *        {[Number]}       options.minWidth  The minimum width of the pen stroke.
 *        {[Number]}       options.maxWidth  The maximum width of the pen stroke.
 *        {[Function]}     options.onBegin   Function to run when the user starts writing a signature.
 *        {[Function]}     options.onEnd     Function to run when the user stops writing a signature.
 */
Signature = function (id, options) {
  if (!id) throw new Error('You must specify the id of the signature pad.');

  var signaturePadMap = SIGNATURE_PAD_MAP.get();

  // If options exist create and return a new signature pad,
  // otherwise attempt to get one that already has beeb created.
  return options ? new signaturePad(id, options) : signaturePadMap[id];
};
