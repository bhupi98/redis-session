module.exports = {
  apps : [{
    
    name:"Send-mail",
    script:'index.js',
    watch: true,
    error_file : "./err.log",
    out_file : "./out.log",
    log_date_format:'“YYYY-MM-DD HH:mm Z”'
  }, 
]
};
