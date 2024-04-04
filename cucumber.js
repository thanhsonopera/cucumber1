// Config để chạy test feature khi được gắn tag cụ thể => tiết kiệm thời gian, không phải chạy hết

// Config để chạy test mặc định
// module.exports = { default: '' }
// Lấy đường dẫn publish
module.exports = { default: '--publish --order random' }

// Config để chạy test với tag @focus
// module.exports = { default: '--tags @focus' }

// Config để chạy test với tag  @smoke
// module.exports = { default: '--tags @smoke' }


// Config để chạy test với tag  @smoke và @focus
// module.exports = { default: '--tags "@smoke and @focus" ' }

// Config để chạy test với tag  @SHOUTY-11 
// module.exports = { default: '--tags @SHOUTY-11' }

// Config languages
// npm test -- --i18n-languages