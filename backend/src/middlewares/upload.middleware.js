const multer = require('multer');

// Memory storage keeps file buffers in RAM - files are never saved to disk
const storage = multer.memoryStorage();

const allowedMimeTypes = [
  'application/pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/msword'
];

const fileFilter = (req, file, cb) => {
  const fileExt = file.originalname.split('.').pop().toLowerCase();
  const isAllowedExt = ['pdf', 'docx', 'doc'].includes(fileExt);
  const isAllowedMime = allowedMimeTypes.includes(file.mimetype);

  if (isAllowedExt || isAllowedMime) {
    cb(null, true);
  } else {
    const error = new Error('Unsupported file type. Only PDF and DOCX files are allowed.');
    error.code = 'UNSUPPORTED_FILE_TYPE';
    error.statusCode = 400;
    cb(error, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB max
  },
  fileFilter: fileFilter
});

module.exports = upload;
