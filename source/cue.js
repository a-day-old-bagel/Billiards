var cue = {
  mat_model: [mat4()],
  isActive: [true],
  mat_start: mat4(),
  offset_Y: 0.02,
  tex_split: vec2(1.0, 1.0),
  tex_which: [0.0],
  backPull: 0,
  tailAngle: 0,
  elevAngle: 5,
  focus: vec3(),
  isVisible: false,
  strikeAnimCounter: 0,
  strikeAnimLength: 80,
  animOrigMag: undefined,
  animOrigAng: undefined,
  animProgMag: undefined,
  animProgAng: undefined,
  updateMat: function(angle, magnitude) {
    this.mat_model[0] = mat4();
    this.mat_model[0] = mult(this.mat_model[0], translate(this.focus));
    this.mat_model[0] = mult(this.mat_model[0], rotateY(angle + 180));
    this.mat_model[0] = mult(this.mat_model[0], this.mat_start);
    this.mat_model[0] = mult(this.mat_model[0], translate(0.0, 0.0, magnitude));
    this.animProgMag = magnitude;
    this.animProgAng = angle;
  },
  startStrikeAnimation: function() {
    this.strikeAnimCounter = this.strikeAnimLength;
    this.animOrigMag = this.animProgMag;
    this.animOrigAng = this.animProgAng;
  },
  strikeAnim: function(dt) {
    var animProgress = -1.5 + Math.pow(this.strikeAnimCounter /
      this.strikeAnimLength, 3);
    this.updateMat(this.animOrigAng, this.animOrigMag * animProgress);
    this.strikeAnimCounter -= dt;
    if (this.strikeAnimCounter <= 0) {
      this.isVisible = false;
    }
  },
  init: function(ballPlaneY, ballRadius) {
    this.mat_start = mat4();
    this.mat_start = mult(this.mat_start, translate(0.0, ballPlaneY +
      this.offset_Y, -ballRadius));
    this.mat_start = mult(this.mat_start, rotateX(-5));
  },
  vertices:
  [0.00458345, -0.00793877, -2.29122E-18, -0.00458345, -0.00793877,
   -2.29122E-18, 0.0, -0.0091669, -2.29122E-18,
  -0.00458345, -0.00793877, -2.29122E-18, 0.00458345, -0.00793877,
   -2.29122E-18, -0.00793877, -0.00458345, -2.29122E-18,
  -0.00793877, -0.00458345, -2.29122E-18, 0.00458345, -0.00793877,
   -2.29122E-18, 0.00793877, -0.00458345, -2.29122E-18,
  0.00585, -0.0101325, -0.0112344, 0.00793877, -0.00458345,
   -2.29122E-18, 0.00458345, -0.00793877, -2.29122E-18,
  0.00793877, -0.00458345, -2.29122E-18, 0.00585, -0.0101325,
   -0.0112344, 0.0101325, -0.00585, -0.0112344,
  0.00645, -0.0111717, -0.658844, 0.0101325, -0.00585, -0.0112344,
   0.00585, -0.0101325, -0.0112344,
  0.0101325, -0.00585, -0.0112344, 0.00645, -0.0111717, -0.658844,
   0.0111717, -0.00645, -0.658844,
  0.01305, -0.0226033, -1.99682, 0.0111717, -0.00645, -0.658844,
   0.00645, -0.0111717, -0.658844,
  0.0111717, -0.00645, -0.658844, 0.01305, -0.0226033, -1.99682,
   0.0226033, -0.01305, -1.99682,
  0.01305, -0.0226033, -1.99682, 0.0224734, -0.012975, -2.27313,
   0.0226033, -0.01305, -1.99682,
  0.0224734, -0.012975, -2.27313, 0.01305, -0.0226033, -1.99682,
   0.012975, -0.0224734, -2.27313,
  -5.63993E-18, -0.0261, -1.99682, 0.012975, -0.0224734, -2.27313,
   0.01305, -0.0226033, -1.99682,
  0.012975, -0.0224734, -2.27313, -5.63993E-18, -0.0261, -1.99682,
   -5.07594E-17, -0.02595, -2.27313,
  -5.63993E-18, -0.0261, -1.99682, -0.012975, -0.0224734, -2.27313,
   -5.07594E-17, -0.02595, -2.27313,
  -0.012975, -0.0224734, -2.27313, -5.63993E-18, -0.0261, -1.99682,
   -0.01305, -0.0226033, -1.99682,
  -5.63993E-18, -0.0261, -1.99682, -0.00645, -0.0111717, -0.658844,
   -0.01305, -0.0226033, -1.99682,
  -0.00645, -0.0111717, -0.658844, -5.63993E-18, -0.0261, -1.99682,
   1.69198E-17, -0.0129, -0.658844,
  0.01305, -0.0226033, -1.99682, 1.69198E-17, -0.0129, -0.658844,
   -5.63993E-18, -0.0261, -1.99682,
  1.69198E-17, -0.0129, -0.658844, 0.01305, -0.0226033, -1.99682,
   0.00645, -0.0111717, -0.658844,
  0.00645, -0.0111717, -0.658844, 1.69198E-17, -0.0117, -0.0112344,
   1.69198E-17, -0.0129, -0.658844,
  1.69198E-17, -0.0117, -0.0112344, 0.00645, -0.0111717, -0.658844,
   0.00585, -0.0101325, -0.0112344,
  0.00458345, -0.00793877, -2.29122E-18, 1.69198E-17, -0.0117, -0.0112344,
   0.00585, -0.0101325, -0.0112344,
  1.69198E-17, -0.0117, -0.0112344, 0.00458345, -0.00793877, -2.29122E-18,
   0.0, -0.0091669, -2.29122E-18,
  -0.00458345, -0.00793877, -2.29122E-18, 1.69198E-17, -0.0117, -0.0112344,
   0.0, -0.0091669, -2.29122E-18,
  1.69198E-17, -0.0117, -0.0112344, -0.00458345, -0.00793877, -2.29122E-18,
   -0.00585, -0.0101325, -0.0112344,
  -0.00458345, -0.00793877, -2.29122E-18, -0.0101325, -0.00585, -0.0112344,
   -0.00585, -0.0101325, -0.0112344,
  -0.0101325, -0.00585, -0.0112344, -0.00458345, -0.00793877, -2.29122E-18,
   -0.00793877, -0.00458345, -2.29122E-18,
  -0.00793877, -0.00458345, -2.29122E-18, -0.0117, 0.0, -0.0112344,
   -0.0101325, -0.00585, -0.0112344,
  -0.0117, 0.0, -0.0112344, -0.00793877, -0.00458345, -2.29122E-18,
   -0.0091669, 0.0, -1.76248E-19,
  -0.00793877, -0.00458345, -2.29122E-18, 0.00793877, -0.00458345,
   -2.29122E-18, -0.0091669, 0.0, -1.76248E-19,
  -0.0091669, 0.0, -1.76248E-19, 0.00793877, -0.00458345, -2.29122E-18,
   0.0091669, 0.0, -1.76248E-19,
  0.00793877, -0.00458345, -2.29122E-18, 0.0117, 0.0, -0.0112344,
   0.0091669, 0.0, -1.76248E-19,
  0.0117, 0.0, -0.0112344, 0.00793877, -0.00458345, -2.29122E-18,
   0.0101325, -0.00585, -0.0112344,
  0.0111717, -0.00645, -0.658844, 0.0117, 0.0, -0.0112344, 0.0101325,
   -0.00585, -0.0112344,
  0.0117, 0.0, -0.0112344, 0.0111717, -0.00645, -0.658844, 0.0129,
   0.0, -0.658844,
  0.0226033, -0.01305, -1.99682, 0.0129, 0.0, -0.658844, 0.0111717,
   -0.00645, -0.658844,
  0.0129, 0.0, -0.658844, 0.0226033, -0.01305, -1.99682, 0.0261,
   5.63993E-18, -1.99682,
  0.0224734, -0.012975, -2.27313, 0.0261, 5.63993E-18, -1.99682,
   0.0226033, -0.01305, -1.99682,
  0.0261, 5.63993E-18, -1.99682, 0.0224734, -0.012975, -2.27313,
   0.02595, 0.0, -2.27313,
  0.0224734, -0.012975, -2.27313, -0.02595, -5.63993E-18, -2.27313,
   0.02595, 0.0, -2.27313,
  0.0224734, -0.012975, -2.27313, -0.0224734, -0.012975, -2.27313,
   -0.02595, -5.63993E-18, -2.27313,
  0.012975, -0.0224734, -2.27313, -0.0224734, -0.012975, -2.27313,
   0.0224734, -0.012975, -2.27313,
  0.012975, -0.0224734, -2.27313, -0.012975, -0.0224734, -2.27313,
   -0.0224734, -0.012975, -2.27313,
  -0.012975, -0.0224734, -2.27313, 0.012975, -0.0224734, -2.27313,
   -5.07594E-17, -0.02595, -2.27313,
  -0.01305, -0.0226033, -1.99682, -0.0224734, -0.012975, -2.27313,
   -0.012975, -0.0224734, -2.27313,
  -0.0224734, -0.012975, -2.27313, -0.01305, -0.0226033, -1.99682,
   -0.0226033, -0.01305, -1.99682,
  -0.01305, -0.0226033, -1.99682, -0.0111717, -0.00645, -0.658844,
   -0.0226033, -0.01305, -1.99682,
  -0.0111717, -0.00645, -0.658844, -0.01305, -0.0226033, -1.99682,
   -0.00645, -0.0111717, -0.658844,
  -0.00645, -0.0111717, -0.658844, -0.0101325, -0.00585, -0.0112344,
   -0.0111717, -0.00645, -0.658844,
  -0.0101325, -0.00585, -0.0112344, -0.00645, -0.0111717, -0.658844,
   -0.00585, -0.0101325, -0.0112344,
  1.69198E-17, -0.0129, -0.658844, -0.00585, -0.0101325, -0.0112344,
   -0.00645, -0.0111717, -0.658844,
  -0.00585, -0.0101325, -0.0112344, 1.69198E-17, -0.0129, -0.658844,
   1.69198E-17, -0.0117, -0.0112344,
  -0.0101325, -0.00585, -0.0112344, -0.0129, 0.0, -0.658844,
   -0.0111717, -0.00645, -0.658844,
  -0.0129, 0.0, -0.658844, -0.0101325, -0.00585, -0.0112344,
   -0.0117, 0.0, -0.0112344,
  -0.0117, 0.0, -0.0112344, -0.0111717, 0.00645, -0.658844,
   -0.0129, 0.0, -0.658844,
  -0.0111717, 0.00645, -0.658844, -0.0117, 0.0, -0.0112344,
   -0.0101325, 0.00585, -0.0112344,
  -0.0091669, 0.0, -1.76248E-19, -0.0101325, 0.00585, -0.0112344,
   -0.0117, 0.0, -0.0112344,
  -0.0101325, 0.00585, -0.0112344, -0.0091669, 0.0, -1.76248E-19,
   -0.00793877, 0.00458345, 2.29122E-18,
  -0.0091669, 0.0, -1.76248E-19, 0.00793877, 0.00458345, 2.29122E-18,
   -0.00793877, 0.00458345, 2.29122E-18,
  -0.0091669, 0.0, -1.76248E-19, 0.0091669, 0.0, -1.76248E-19,
   0.00793877, 0.00458345, 2.29122E-18,
  0.0091669, 0.0, -1.76248E-19, 0.0101325, 0.00585, -0.0112344,
   0.00793877, 0.00458345, 2.29122E-18,
  0.0101325, 0.00585, -0.0112344, 0.0091669, 0.0, -1.76248E-19,
   0.0117, 0.0, -0.0112344,
  0.0129, 0.0, -0.658844, 0.0101325, 0.00585, -0.0112344, 0.0117,
   0.0, -0.0112344,
  0.0101325, 0.00585, -0.0112344, 0.0129, 0.0, -0.658844, 0.0111717,
   0.00645, -0.658844,
  0.0261, 5.63993E-18, -1.99682, 0.0111717, 0.00645, -0.658844,
   0.0129, 0.0, -0.658844,
  0.0111717, 0.00645, -0.658844, 0.0261, 5.63993E-18, -1.99682,
   0.0226033, 0.01305, -1.99682,
  0.02595, 0.0, -2.27313, 0.0226033, 0.01305, -1.99682, 0.0261,
   5.63993E-18, -1.99682,
  0.0226033, 0.01305, -1.99682, 0.02595, 0.0, -2.27313, 0.0224734,
   0.012975, -2.27313,
  0.02595, 0.0, -2.27313, -0.0224734, 0.012975, -2.27313, 0.0224734,
   0.012975, -2.27313,
  0.02595, 0.0, -2.27313, -0.02595, -5.63993E-18, -2.27313, -0.0224734,
   0.012975, -2.27313,
  -0.0261, 0.0, -1.99682, -0.0224734, 0.012975, -2.27313, -0.02595,
   -5.63993E-18, -2.27313,
  -0.0224734, 0.012975, -2.27313, -0.0261, 0.0, -1.99682, -0.0226033,
   0.01305, -1.99682,
  -0.0129, 0.0, -0.658844, -0.0226033, 0.01305, -1.99682, -0.0261, 0.0,
   -1.99682,
  -0.0226033, 0.01305, -1.99682, -0.0129, 0.0, -0.658844, -0.0111717,
   0.00645, -0.658844,
  -0.0111717, 0.00645, -0.658844, -0.01305, 0.0226033, -1.99682,
   -0.0226033, 0.01305, -1.99682,
  -0.01305, 0.0226033, -1.99682, -0.0111717, 0.00645, -0.658844,
   -0.00645, 0.0111717, -0.658844,
  -0.0101325, 0.00585, -0.0112344, -0.00645, 0.0111717, -0.658844,
   -0.0111717, 0.00645, -0.658844,
  -0.00645, 0.0111717, -0.658844, -0.0101325, 0.00585, -0.0112344,
   -0.00585, 0.0101325, -0.0112344,
  -0.00793877, 0.00458345, 2.29122E-18, -0.00585, 0.0101325,
   -0.0112344, -0.0101325, 0.00585, -0.0112344,
  -0.00585, 0.0101325, -0.0112344, -0.00793877, 0.00458345,
   2.29122E-18, -0.00458345, 0.00793877, 2.29122E-18,
  -0.00793877, 0.00458345, 2.29122E-18, 0.00793877, 0.00458345,
   2.29122E-18, -0.00458345, 0.00793877, 2.29122E-18,
  -0.00458345, 0.00793877, 2.29122E-18, 0.00793877, 0.00458345,
   2.29122E-18, 0.00458345, 0.00793877, 2.29122E-18,
  0.00793877, 0.00458345, 2.29122E-18, 0.00585, 0.0101325,
   -0.0112344, 0.00458345, 0.00793877, 2.29122E-18,
  0.00585, 0.0101325, -0.0112344, 0.00793877, 0.00458345,
   2.29122E-18, 0.0101325, 0.00585, -0.0112344,
  0.0101325, 0.00585, -0.0112344, 0.00645, 0.0111717,
   -0.658844, 0.00585, 0.0101325, -0.0112344,
  0.00645, 0.0111717, -0.658844, 0.0101325, 0.00585,
   -0.0112344, 0.0111717, 0.00645, -0.658844,
  0.0111717, 0.00645, -0.658844, 0.01305, 0.0226033,
   -1.99682, 0.00645, 0.0111717, -0.658844,
  0.01305, 0.0226033, -1.99682, 0.0111717, 0.00645,
   -0.658844, 0.0226033, 0.01305, -1.99682,
  0.0224734, 0.012975, -2.27313, 0.01305, 0.0226033,
   -1.99682, 0.0226033, 0.01305, -1.99682,
  0.01305, 0.0226033, -1.99682, 0.0224734, 0.012975,
   -2.27313, 0.012975, 0.0224734, -2.27313,
  0.0224734, 0.012975, -2.27313, -0.012975, 0.0224734,
   -2.27313, 0.012975, 0.0224734, -2.27313,
  0.0224734, 0.012975, -2.27313, -0.0224734, 0.012975,
   -2.27313, -0.012975, 0.0224734, -2.27313,
  -0.0226033, 0.01305, -1.99682, -0.012975, 0.0224734,
   -2.27313, -0.0224734, 0.012975, -2.27313,
  -0.012975, 0.0224734, -2.27313, -0.0226033, 0.01305,
   -1.99682, -0.01305, 0.0226033, -1.99682,
  -5.63993E-18, 0.0261, -1.99682, -0.012975, 0.0224734,
   -2.27313, -0.01305, 0.0226033, -1.99682,
  -0.012975, 0.0224734, -2.27313, -5.63993E-18, 0.0261,
   -1.99682, -5.07594E-17, 0.02595, -2.27313,
  -5.63993E-18, 0.0261, -1.99682, 0.012975, 0.0224734,
   -2.27313, -5.07594E-17, 0.02595, -2.27313,
  0.012975, 0.0224734, -2.27313, -5.63993E-18, 0.0261,
   -1.99682, 0.01305, 0.0226033, -1.99682,
  1.69198E-17, 0.0129, -0.658844, 0.01305, 0.0226033,
   -1.99682, -5.63993E-18, 0.0261, -1.99682,
  0.01305, 0.0226033, -1.99682, 1.69198E-17, 0.0129,
   -0.658844, 0.00645, 0.0111717, -0.658844,
  1.69198E-17, 0.0129, -0.658844, 0.00585, 0.0101325,
   -0.0112344, 0.00645, 0.0111717, -0.658844,
  0.00585, 0.0101325, -0.0112344, 1.69198E-17, 0.0129,
   -0.658844, 1.69198E-17, 0.0117, -0.0112344,
  1.69198E-17, 0.0129, -0.658844, -0.00585, 0.0101325,
   -0.0112344, 1.69198E-17, 0.0117, -0.0112344,
  -0.00585, 0.0101325, -0.0112344, 1.69198E-17, 0.0129,
   -0.658844, -0.00645, 0.0111717, -0.658844,
  -5.63993E-18, 0.0261, -1.99682, -0.00645, 0.0111717,
   -0.658844, 1.69198E-17, 0.0129, -0.658844,
  -0.00645, 0.0111717, -0.658844, -5.63993E-18, 0.0261,
   -1.99682, -0.01305, 0.0226033, -1.99682,
  -0.00458345, 0.00793877, 2.29122E-18, 1.69198E-17,
   0.0117, -0.0112344, -0.00585, 0.0101325, -0.0112344,
  1.69198E-17, 0.0117, -0.0112344, -0.00458345, 0.00793877,
   2.29122E-18, 0.0, 0.0091669, 2.29122E-18,
  -0.00458345, 0.00793877, 2.29122E-18, 0.00458345,
   0.00793877, 2.29122E-18, 0.0, 0.0091669, 2.29122E-18,
  0.00458345, 0.00793877, 2.29122E-18, 1.69198E-17,
   0.0117, -0.0112344, 0.0, 0.0091669, 2.29122E-18,
  1.69198E-17, 0.0117, -0.0112344, 0.00458345, 0.00793877,
   2.29122E-18, 0.00585, 0.0101325, -0.0112344,
  0.012975, 0.0224734, -2.27313, -0.012975, 0.0224734,
   -2.27313, -5.07594E-17, 0.02595, -2.27313,
  -0.0261, 0.0, -1.99682, -0.0111717, -0.00645, -0.658844,
   -0.0129, 0.0, -0.658844,
  -0.0111717, -0.00645, -0.658844, -0.0261, 0.0, -1.99682,
   -0.0226033, -0.01305, -1.99682,
  -0.02595, -5.63993E-18, -2.27313, -0.0226033, -0.01305,
   -1.99682, -0.0261, 0.0, -1.99682,
  -0.0226033, -0.01305, -1.99682, -0.02595, -5.63993E-18,
   -2.27313, -0.0224734, -0.012975, -2.27313],

  uvs:
  [0.817904, 3.99877, 0.823092, 3.99971, 0.819872, 3.99938,
  0.823092, 3.99971, 0.817904, 3.99877, 0.826702, 3.99967,
  0.826702, 3.99967, 0.817904, 3.99877, 0.817716, 3.99805,
  0.808191, 3.99603, 0.815351, 3.99733, 0.812014, 3.99761,
  0.815351, 3.99733, 0.808191, 3.99603, 0.812451, 3.99568,
  -0.681895, 3.7251, -0.666256, 3.99424, -0.678841, 3.99425,
  -0.666256, 3.99424, -0.681895, 3.7251, -0.668019, 3.72509,
  0.453474, 3.16793, 0.741208, 3.72209, 0.72737, 3.72235,
  0.741208, 3.72209, 0.453474, 3.16793, 0.481472, 3.16739,
  0.792103, 3.16898, 0.818413, 3.05412, 0.820178, 3.16896,
  0.818413, 3.05412, 0.792103, 3.16898, 0.7905, 3.05414,
  0.764028, 3.16899, 0.7905, 3.05414, 0.792103, 3.16898,
  0.7905, 3.05414, 0.764028, 3.16899, 0.762586, 3.05416,
  0.764028, 3.16899, 0.734673, 3.05417, 0.762586, 3.05416,
  0.734673, 3.05417, 0.764028, 3.16899, 0.735954, 3.169,
  2.16219, 3.16807, 2.06453, 3.72451, 2.09305, 3.16791,
  2.06453, 3.72451, 2.16219, 3.16807, 2.0987, 3.72458,
  0.664898, 3.16674, 0.810278, 3.72719, 0.608575, 3.16777,
  0.810278, 3.72719, 0.664898, 3.16674, 0.838115, 3.72669,
  -0.690865, 3.72509, -0.695106, 3.99425, -0.704741, 3.72511,
  -0.695106, 3.99425, -0.690865, 3.72509, -0.682521, 3.99424,
  0.851028, 3.99946, 0.854974, 3.99769, 0.857987, 3.99839,
  0.854974, 3.99769, 0.851028, 3.99946, 0.848668, 3.99891,
  0.846011, 3.99842, 0.854974, 3.99769, 0.848668, 3.99891,
  0.854974, 3.99769, 0.846011, 3.99842, 0.851584, 3.99707,
  0.846011, 3.99842, 0.84786, 3.99652, 0.851584, 3.99707,
  0.84786, 3.99652, 0.846011, 3.99842, 0.843094, 3.99799,
  0.843094, 3.99799, 0.843851, 3.99607, 0.84786, 3.99652,
  0.843851, 3.99607, 0.843094, 3.99799, 0.839953, 3.99764,
  0.826702, 3.99967, 0.817716, 3.99805, 0.829733, 3.99928,
  0.829733, 3.99928, 0.817716, 3.99805, 0.819358, 3.99741,
  0.815351, 3.99733, 0.816885, 3.99542, 0.818825, 3.99713,
  0.816885, 3.99542, 0.815351, 3.99733, 0.812451, 3.99568,
  -0.663962, 3.7251, -0.650086, 3.99424, -0.662671, 3.99425,
  -0.650086, 3.99424, -0.663962, 3.7251, -0.650086, 3.72509,
  0.481472, 3.16739, 0.770347, 3.7216, 0.741208, 3.72209,
  0.770347, 3.7216, 0.481472, 3.16739, 0.540427, 3.1664,
  0.818413, 3.05412, 0.848253, 3.16894, 0.820178, 3.16896,
  0.848253, 3.16894, 0.818413, 3.05412, 0.846327, 3.05411,
  0.835966, 3.04649, 0.925986, 3.036, 0.850014, 3.05131,
  0.835966, 3.04649, 0.90176, 3.03323, 0.925986, 3.036,
  0.83586, 3.04091, 0.90176, 3.03323, 0.835966, 3.04649,
  0.83586, 3.04091, 0.873847, 3.03325, 0.90176, 3.03323,
  0.873847, 3.03325, 0.83586, 3.04091, 0.849726, 3.03606,
  0.735954, 3.169, 0.641033, 3.05417, 0.734673, 3.05417,
  0.641033, 3.05417, 0.735954, 3.169, 0.641773, 3.16901,
  2.1, 3.16676, 2.04295, 3.72335, 2.0423, 3.16674,
  2.04295, 3.72335, 2.1, 3.16676, 2.07147, 3.72335,
  -0.711511, 3.7251, -0.727151, 3.99424, -0.725387, 3.72509,
  -0.727151, 3.99424, -0.711511, 3.7251, -0.714565, 3.99425,
  -0.688666, 3.72511, -0.710885, 3.99424, -0.702541, 3.72509,
  -0.710885, 3.99424, -0.688666, 3.72511, -0.6983, 3.99425,
  -0.730735, 3.99425, -0.74332, 3.72509, -0.729444, 3.7251,
  -0.74332, 3.72509, -0.730735, 3.99425, -0.74332, 3.99424,
  -0.746896, 3.99424, -0.760772, 3.7251, -0.746896, 3.72509,
  -0.760772, 3.7251, -0.746896, 3.99424, -0.759481, 3.99425,
  0.839953, 3.99764, 0.839609, 3.9957, 0.843851, 3.99607,
  0.839609, 3.9957, 0.839953, 3.99764, 0.836629, 3.99735,
  0.829733, 3.99928, 0.822389, 3.99701, 0.831375, 3.99863,
  0.829733, 3.99928, 0.819358, 3.99741, 0.822389, 3.99701,
  0.818825, 3.99713, 0.821434, 3.99527, 0.822389, 3.99701,
  0.821434, 3.99527, 0.818825, 3.99713, 0.816885, 3.99542,
  -0.646511, 3.72509, -0.633925, 3.99425, -0.646511, 3.99424,
  -0.633925, 3.99425, -0.646511, 3.72509, -0.632635, 3.7251,
  0.539121, 3.16916, 0.797225, 3.72394, 0.769041, 3.72436,
  0.797225, 3.72394, 0.539121, 3.16916, 0.596143, 3.16832,
  0.846327, 3.05411, 0.876327, 3.16892, 0.848253, 3.16894,
  0.876327, 3.16892, 0.846327, 3.05411, 0.87424, 3.05409,
  0.850014, 3.05131, 0.940034, 3.04083, 0.87424, 3.05409,
  0.850014, 3.05131, 0.925986, 3.036, 0.940034, 3.04083,
  0.0125595, 3.16902, -0.0810799, 3.05418, 0.0125595, 3.05418,
  -0.0810799, 3.05418, 0.0125595, 3.16902, -0.0816212, 3.16901,
  2.01053, 3.72342, 1.91667, 3.16694, 1.9767, 3.16689,
  1.91667, 3.16694, 2.01053, 3.72342, 1.98086, 3.72344,
  0.964377, 3.72308, 0.906242, 3.16665, 0.934336, 3.16658,
  0.906242, 3.16665, 0.964377, 3.72308, 0.950492, 3.72312,
  -0.531454, 3.99424, -0.547094, 3.7251, -0.533218, 3.72509,
  -0.547094, 3.7251, -0.531454, 3.99424, -0.54404, 3.99425,
  0.836629, 3.99735, 0.835188, 3.99544, 0.839609, 3.9957,
  0.835188, 3.99544, 0.836629, 3.99735, 0.833165, 3.99715,
  0.831375, 3.99863, 0.822389, 3.99701, 0.831187, 3.99791,
  0.831187, 3.99791, 0.822389, 3.99701, 0.825999, 3.99698,
  0.822389, 3.99701, 0.826041, 3.99522, 0.825999, 3.99698,
  0.826041, 3.99522, 0.822389, 3.99701, 0.821434, 3.99527,
  -0.630341, 3.99424, -0.614702, 3.7251, -0.617756, 3.99425,
  -0.614702, 3.7251, -0.630341, 3.99424, -0.628578, 3.72509,
  0.805246, 3.72436, 0.679954, 3.16784, 0.842705, 3.72392,
  0.679954, 3.16784, 0.805246, 3.72436, 0.604165, 3.16874,
  0.87424, 3.05409, 0.904402, 3.1689, 0.876327, 3.16892,
  0.904402, 3.1689, 0.87424, 3.05409, 0.902153, 3.05407,
  0.87424, 3.05409, 0.94014, 3.04641, 0.902153, 3.05407,
  0.87424, 3.05409, 0.940034, 3.04083, 0.94014, 3.04641,
  -0.470401, 3.16899, -0.494977, 3.05412, -0.467064, 3.05415,
  -0.494977, 3.05412, -0.470401, 3.16899, -0.498476, 3.16895,
  -0.592657, 3.16894, -0.494977, 3.05412, -0.498476, 3.16895,
  -0.494977, 3.05412, -0.592657, 3.16894, -0.588617, 3.05411,
  0.932477, 3.16888, 0.902153, 3.05407, 0.930067, 3.05404,
  0.902153, 3.05407, 0.932477, 3.16888, 0.904402, 3.1689,
  0.876597, 3.72313, 0.671933, 3.16741, 0.756733, 3.16667,
  0.671933, 3.16741, 0.876597, 3.72313, 0.834684, 3.7235,
  -0.591856, 3.72511, -0.614075, 3.99424, -0.605732, 3.72509,
  -0.614075, 3.99424, -0.591856, 3.72511, -0.60149, 3.99425,
  -0.626857, 3.72511, -0.552319, 3.99424, -0.594537, 3.99425,
  -0.552319, 3.99424, -0.626857, 3.72511, -0.580309, 3.72509,
  0.756733, 3.16667, 0.950492, 3.72312, 0.876597, 3.72313,
  0.950492, 3.72312, 0.756733, 3.16667, 0.906242, 3.16665,
  0.833165, 3.99715, 0.830646, 3.99528, 0.835188, 3.99544,
  0.830646, 3.99528, 0.833165, 3.99715, 0.829606, 3.99702,
  0.831187, 3.99791, 0.825999, 3.99698, 0.829219, 3.9973,
  0.825999, 3.99698, 0.830646, 3.99528, 0.829606, 3.99702,
  0.830646, 3.99528, 0.825999, 3.99698, 0.826041, 3.99522,
  0.902153, 3.05407, 0.94014, 3.04641, 0.926274, 3.05126,
  1.9767, 3.16689, 2.04295, 3.72335, 2.01053, 3.72342,
  2.04295, 3.72335, 1.9767, 3.16689, 2.0423, 3.16674,
  0.0125595, 3.05418, 0.0406343, 3.16901, 0.0125595, 3.16902,
  0.0406343, 3.16901, 0.0125595, 3.05418, 0.0404729, 3.05418],
  normals:
  [0.398992, -0.691075, 0.602678, -0.398992, -0.691075,
   0.602678, 1.31417E-15, -0.797984, 0.602678,
  -0.398992, -0.691075, 0.602678, 0.398992, -0.691075,
   0.602678, -0.691075, -0.398992, 0.602678,
  -0.691075, -0.398992, 0.602678, 0.398992, -0.691075,
   0.602678, 0.691075, -0.398992, 0.602678,
  0.487755, -0.844816, 0.219956, 0.691075, -0.398992,
   0.602678, 0.398992, -0.691075, 0.602678,
  0.691075, -0.398992, 0.602678, 0.487755, -0.844816,
   0.219956, 0.844816, -0.487755, 0.219956,
  0.499991, -0.866011, 0.00585911, 0.866024, -0.499999,
   0.00185296, 0.499999, -0.866024, 0.00185296,
  0.866024, -0.499999, 0.00185296, 0.499991, -0.866011,
   0.00585911, 0.866011, -0.499991, 0.00585911,
  0.499995, -0.866016, 0.00466121, 0.866011, -0.499991,
   0.00585911, 0.499991, -0.866011, 0.00585911,
  0.866011, -0.499991, 0.00585911, 0.499995, -0.866016,
   0.00466121, 0.866016, -0.499995, 0.00466121,
  0.499995, -0.866016, 0.00466121, 0.768924, -0.443938,
   -0.460081, 0.866016, -0.499995, 0.00466121,
  0.768924, -0.443938, -0.460081, 0.499995, -0.866016,
   0.00466121, 0.443938, -0.768924, -0.460081,
  4.5976E-16, -0.999989, 0.00466121, 0.443938, -0.768924,
   -0.460081, 0.499995, -0.866016, 0.00466121,
  0.443938, -0.768924, -0.460081, 4.5976E-16, -0.999989,
   0.00466121, 2.80642E-16, -0.887877, -0.460081,
  4.5976E-16, -0.999989, 0.00466121, -0.443938, -0.768924,
   -0.460081, 2.80642E-16, -0.887877, -0.460081,
  -0.443938, -0.768924, -0.460081, 4.5976E-16, -0.999989,
   0.00466121, -0.499995, -0.866016, 0.00466121,
  4.5976E-16, -0.999989, 0.00466121, -0.499991, -0.866011,
   0.00585911, -0.499995, -0.866016, 0.00466121,
  -0.499991, -0.866011, 0.00585911, 4.5976E-16, -0.999989,
   0.00466121, 5.0286E-16, -0.999983, 0.00585911,
  0.499995, -0.866016, 0.00466121, 5.0286E-16, -0.999983,
   0.00585911, 4.5976E-16, -0.999989, 0.00466121,
  5.0286E-16, -0.999983, 0.00585911, 0.499995, -0.866016,
   0.00466121, 0.499991, -0.866011, 0.00585911,
  0.499991, -0.866011, 0.00585911, 4.02286E-16, -0.999998,
   0.00185296, 5.0286E-16, -0.999983, 0.00585911,
  4.02286E-16, -0.999998, 0.00185296, 0.499991, -0.866011,
   0.00585911, 0.499999, -0.866024, 0.00185296,
  0.398992, -0.691075, 0.602678, 1.60653E-15, -0.97551,
   0.219956, 0.487755, -0.844816, 0.219956,
  1.60653E-15, -0.97551, 0.219956, 0.398992, -0.691075,
   0.602678, 1.31417E-15, -0.797984, 0.602678,
  -0.398992, -0.691075, 0.602678, 1.60653E-15, -0.97551,
   0.219956, 1.31417E-15, -0.797984, 0.602678,
  1.60653E-15, -0.97551, 0.219956, -0.398992, -0.691075,
   0.602678, -0.487755, -0.844816, 0.219956,
  -0.398992, -0.691075, 0.602678, -0.844816, -0.487755,
   0.219956, -0.487755, -0.844816, 0.219956,
  -0.844816, -0.487755, 0.219956, -0.398992, -0.691075,
   0.602678, -0.691075, -0.398992, 0.602678,
  -0.691075, -0.398992, 0.602678, -0.97551, 1.4344E-16,
   0.219956, -0.844816, -0.487755, 0.219956,
  -0.97551, 1.4344E-16, 0.219956, -0.691075, -0.398992,
   0.602678, -0.797984, -2.34674E-17, 0.602678,
  -0.691075, -0.398992, 0.602678, 0.691075, -0.398992,
   0.602678, -0.797984, -1.41115E-17, 0.602678,
  -0.797984, -1.41115E-17, 0.602678, 0.691075, -0.398992,
   0.602678, 0.797984, -2.0185E-16, 0.602678,
  0.691075, -0.398992, 0.602678, 0.97551, -8.60643E-17,
   0.219956, 0.797984, -2.11206E-16, 0.602678,
  0.97551, -8.60643E-17, 0.219956, 0.691075, -0.398992,
   0.602678, 0.844816, -0.487755, 0.219956,
  0.866011, -0.499991, 0.00585911, 0.999998, -2.01143E-16,
   0.00185296, 0.866024, -0.499999, 0.00185296,
  0.999998, -2.01143E-16, 0.00185296, 0.866011, -0.499991,
   0.00585911, 0.999983, -2.58614E-16, 0.00585911,
  0.866016, -0.499995, 0.00466121, 0.999983, -2.58614E-16,
   0.00585911, 0.866011, -0.499991, 0.00585911,
  0.999983, -2.58614E-16, 0.00585911, 0.866016, -0.499995,
   0.00466121, 0.999989, -3.30453E-16, 0.00466121,
  0.768924, -0.443938, -0.460081, 0.999989, -3.30453E-16,
   0.00466121, 0.866016, -0.499995, 0.00466121,
  0.999989, -3.30453E-16, 0.00466121, 0.768924, -0.443938,
   -0.460081, 0.887877, -3.06154E-16, -0.460081,
  0.768924, -0.443938, -0.460081, -0.887877, 0.0, -0.460081,
   0.887877, -3.06154E-16, -0.460081,
  0.768924, -0.443938, -0.460081, -0.768924, -0.443938,
   -0.460081, -0.887877, 0.0, -0.460081,
  0.443938, -0.768924, -0.460081, -0.768924, -0.443938,
   -0.460081, 0.768924, -0.443938, -0.460081,
  0.443938, -0.768924, -0.460081, -0.443938, -0.768924,
   -0.460081, -0.768924, -0.443938, -0.460081,
  -0.443938, -0.768924, -0.460081, 0.443938, -0.768924,
   -0.460081, 2.80642E-16, -0.887877, -0.460081,
  -0.499995, -0.866016, 0.00466121, -0.768924, -0.443938,
   -0.460081, -0.443938, -0.768924, -0.460081,
  -0.768924, -0.443938, -0.460081, -0.499995, -0.866016,
   0.00466121, -0.866016, -0.499995, 0.00466121,
  -0.499995, -0.866016, 0.00466121, -0.866011, -0.499991,
   0.00585911, -0.866016, -0.499995, 0.00466121,
  -0.866011, -0.499991, 0.00585911, -0.499995, -0.866016,
   0.00466121, -0.499991, -0.866011, 0.00585911,
  -0.499991, -0.866011, 0.00585911, -0.866024, -0.499999,
   0.00185296, -0.866011, -0.499991, 0.00585911,
  -0.866024, -0.499999, 0.00185296, -0.499991, -0.866011,
   0.00585911, -0.499999, -0.866024, 0.00185296,
  5.17228E-16, -0.999983, 0.00585911, -0.499999, -0.866024,
   0.00185296, -0.499991, -0.866011, 0.00585911,
  -0.499999, -0.866024, 0.00185296, 5.17228E-16, -0.999983,
   0.00585911, 4.02286E-16, -0.999998, 0.00185296,
  -0.866024, -0.499999, 0.00185296, -0.999983, -1.43674E-17,
   0.00585911, -0.866011, -0.499991, 0.00585911,
  -0.999983, -1.43674E-17, 0.00585911, -0.866024, -0.499999,
   0.00185296, -0.999998, 8.6204E-17, 0.00185296,
  -0.999998, 8.6204E-17, 0.00185296, -0.866011, 0.499991,
   0.00585911, -0.999983, 0.0, 0.00585911,
  -0.866011, 0.499991, 0.00585911, -0.999998, 8.6204E-17,
   0.00185296, -0.866024, 0.499999, 0.00185296,
  -0.797984, -2.34674E-17, 0.602678, -0.844816, 0.487755,
   0.219956, -0.97551, 1.4344E-16, 0.219956,
  -0.844816, 0.487755, 0.219956, -0.797984, -2.34674E-17,
   0.602678, -0.691075, 0.398992, 0.602678,
  -0.797984, -1.41115E-17, 0.602678, 0.691075, 0.398992,
   0.602678, -0.691075, 0.398992, 0.602678,
  -0.797984, -1.41115E-17, 0.602678, 0.797984, -2.0185E-16,
   0.602678, 0.691075, 0.398992, 0.602678,
  0.797984, -2.11206E-16, 0.602678, 0.844816, 0.487755,
   0.219956, 0.691075, 0.398992, 0.602678,
  0.844816, 0.487755, 0.219956, 0.797984, -2.11206E-16,
   0.602678, 0.97551, -8.60643E-17, 0.219956,
  0.999983, -2.58614E-16, 0.00585911, 0.866024, 0.499999,
   0.00185296, 0.999998, -2.01143E-16, 0.00185296,
  0.866024, 0.499999, 0.00185296, 0.999983, -2.58614E-16,
   0.00585911, 0.866011, 0.499991, 0.00585911,
  0.999989, -3.30453E-16, 0.00466121, 0.866011, 0.499991,
   0.00585911, 0.999983, -2.58614E-16, 0.00585911,
  0.866011, 0.499991, 0.00585911, 0.999989, -3.30453E-16,
   0.00466121, 0.866016, 0.499995, 0.00466121,
  0.887877, -3.06154E-16, -0.460081, 0.866016, 0.499995,
   0.00466121, 0.999989, -3.30453E-16, 0.00466121,
  0.866016, 0.499995, 0.00466121, 0.887877, -3.06154E-16,
   -0.460081, 0.768924, 0.443938, -0.460081,
  0.887877, -3.06154E-16, -0.460081, -0.768924, 0.443938,
   -0.460081, 0.768924, 0.443938, -0.460081,
  0.887877, -3.06154E-16, -0.460081, -0.887877, 0.0, -0.460081,
   -0.768924, 0.443938, -0.460081,
  -0.999989, -5.74701E-17, 0.00466121, -0.768924, 0.443938,
   -0.460081, -0.887877, 0.0, -0.460081,
  -0.768924, 0.443938, -0.460081, -0.999989, -5.74701E-17,
   0.00466121, -0.866016, 0.499995, 0.00466121,
  -0.999983, -1.43674E-17, 0.00585911, -0.866016, 0.499995,
   0.00466121, -0.999989, -5.74701E-17, 0.00466121,
  -0.866016, 0.499995, 0.00466121, -0.999983, -1.43674E-17,
   0.00585911, -0.866011, 0.499991, 0.00585911,
  -0.866011, 0.499991, 0.00585911, -0.499995, 0.866016,
   0.00466121, -0.866016, 0.499995, 0.00466121,
  -0.499995, 0.866016, 0.00466121, -0.866011, 0.499991,
   0.00585911, -0.499991, 0.866011, 0.00585911,
  -0.866024, 0.499999, 0.00185296, -0.499991, 0.866011,
   0.00585911, -0.866011, 0.499991, 0.00585911,
  -0.499991, 0.866011, 0.00585911, -0.866024, 0.499999,
   0.00185296, -0.499999, 0.866024, 0.00185296,
  -0.691075, 0.398992, 0.602678, -0.487755, 0.844816,
   0.219956, -0.844816, 0.487755, 0.219956,
  -0.487755, 0.844816, 0.219956, -0.691075, 0.398992,
   0.602678, -0.398992, 0.691075, 0.602678,
  -0.691075, 0.398992, 0.602678, 0.691075, 0.398992,
   0.602678, -0.398992, 0.691075, 0.602678,
  -0.398992, 0.691075, 0.602678, 0.691075, 0.398992,
   0.602678, 0.398992, 0.691075, 0.602678,
  0.691075, 0.398992, 0.602678, 0.487755, 0.844816,
   0.219956, 0.398992, 0.691075, 0.602678,
  0.487755, 0.844816, 0.219956, 0.691075, 0.398992,
   0.602678, 0.844816, 0.487755, 0.219956,
  0.866024, 0.499999, 0.00185296, 0.499991, 0.866011,
   0.00585911, 0.499999, 0.866024, 0.00185296,
  0.499991, 0.866011, 0.00585911, 0.866024, 0.499999,
   0.00185296, 0.866011, 0.499991, 0.00585911,
  0.866011, 0.499991, 0.00585911, 0.499995, 0.866016,
   0.00466121, 0.499991, 0.866011, 0.00585911,
  0.499995, 0.866016, 0.00466121, 0.866011, 0.499991,
   0.00585911, 0.866016, 0.499995, 0.00466121,
  0.768924, 0.443938, -0.460081, 0.499995, 0.866016,
   0.00466121, 0.866016, 0.499995, 0.00466121,
  0.499995, 0.866016, 0.00466121, 0.768924, 0.443938,
   -0.460081, 0.443938, 0.768924, -0.460081,
  0.768924, 0.443938, -0.460081, -0.443938, 0.768924,
   -0.460081, 0.443938, 0.768924, -0.460081,
  0.768924, 0.443938, -0.460081, -0.768924, 0.443938,
   -0.460081, -0.443938, 0.768924, -0.460081,
  -0.866016, 0.499995, 0.00466121, -0.443938, 0.768924,
   -0.460081, -0.768924, 0.443938, -0.460081,
  -0.443938, 0.768924, -0.460081, -0.866016, 0.499995,
   0.00466121, -0.499995, 0.866016, 0.00466121,
  5.60333E-16, 0.999989, 0.00466121, -0.443938, 0.768924,
   -0.460081, -0.499995, 0.866016, 0.00466121,
  -0.443938, 0.768924, -0.460081, 5.60333E-16, 0.999989,
   0.00466121, 1.7859E-16, 0.887877, -0.460081,
  5.60333E-16, 0.999989, 0.00466121, 0.443938, 0.768924,
   -0.460081, 1.7859E-16, 0.887877, -0.460081,
  0.443938, 0.768924, -0.460081, 5.60333E-16, 0.999989,
   0.00466121, 0.499995, 0.866016, 0.00466121,
  4.31023E-16, 0.999983, 0.00585911, 0.499995, 0.866016,
   0.00466121, 5.60333E-16, 0.999989, 0.00466121,
  0.499995, 0.866016, 0.00466121, 4.31023E-16, 0.999983,
   0.00585911, 0.499991, 0.866011, 0.00585911,
  4.31023E-16, 0.999983, 0.00585911, 0.499999, 0.866024,
   0.00185296, 0.499991, 0.866011, 0.00585911,
  0.499999, 0.866024, 0.00185296, 4.31023E-16, 0.999983,
   0.00585911, -5.74694E-17, 0.999998, 0.00185296,
  4.31023E-16, 0.999983, 0.00585911, -0.499999, 0.866024,
   0.00185296, -5.74694E-17, 0.999998, 0.00185296,
  -0.499999, 0.866024, 0.00185296, 4.31023E-16, 0.999983,
   0.00585911, -0.499991, 0.866011, 0.00585911,
  5.60333E-16, 0.999989, 0.00466121, -0.499991, 0.866011,
   0.00585911, 4.31023E-16, 0.999983, 0.00585911,
  -0.499991, 0.866011, 0.00585911, 5.60333E-16, 0.999989,
   0.00466121, -0.499995, 0.866016, 0.00466121,
  -0.398992, 0.691075, 0.602678, 1.4344E-15, 0.97551,
   0.219956, -0.487755, 0.844816, 0.219956,
  1.4344E-15, 0.97551, 0.219956, -0.398992, 0.691075,
   0.602678, 1.17337E-15, 0.797984, 0.602678,
  -0.398992, 0.691075, 0.602678, 0.398992, 0.691075,
   0.602678, 1.17337E-15, 0.797984, 0.602678,
  0.398992, 0.691075, 0.602678, 1.4344E-15, 0.97551,
   0.219956, 1.17337E-15, 0.797984, 0.602678,
  1.4344E-15, 0.97551, 0.219956, 0.398992, 0.691075,
   0.602678, 0.487755, 0.844816, 0.219956,
  0.443938, 0.768924, -0.460081, -0.443938, 0.768924,
   -0.460081, 1.7859E-16, 0.887877, -0.460081,
  -0.999989, -5.74701E-17, 0.00466121, -0.866011,
   -0.499991, 0.00585911, -0.999983, -1.43674E-17, 0.00585911,
  -0.866011, -0.499991, 0.00585911, -0.999989, -5.74701E-17,
   0.00466121, -0.866016, -0.499995, 0.00466121,
  -0.887877, 0.0, -0.460081, -0.866016, -0.499995,
   0.00466121, -0.999989, -5.74701E-17, 0.00466121,
  -0.866016, -0.499995, 0.00466121, -0.887877, 0.0,
   -0.460081, -0.768924, -0.443938, -0.460081]

};
