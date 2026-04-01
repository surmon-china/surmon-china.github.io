import{c as e}from"./dist-D508tbBT.js";function t(e){for(var t={},n=e.split(` `),r=0;r<n.length;++r)t[n[r]]=!0;return t}var n=t(`break return rewrite set accept_mutex accept_mutex_delay access_log add_after_body add_before_body add_header addition_types aio alias allow ancient_browser ancient_browser_value auth_basic auth_basic_user_file auth_http auth_http_header auth_http_timeout autoindex autoindex_exact_size autoindex_localtime charset charset_types client_body_buffer_size client_body_in_file_only client_body_in_single_buffer client_body_temp_path client_body_timeout client_header_buffer_size client_header_timeout client_max_body_size connection_pool_size create_full_put_path daemon dav_access dav_methods debug_connection debug_points default_type degradation degrade deny devpoll_changes devpoll_events directio directio_alignment empty_gif env epoll_events error_log eventport_events expires fastcgi_bind fastcgi_buffer_size fastcgi_buffers fastcgi_busy_buffers_size fastcgi_cache fastcgi_cache_key fastcgi_cache_methods fastcgi_cache_min_uses fastcgi_cache_path fastcgi_cache_use_stale fastcgi_cache_valid fastcgi_catch_stderr fastcgi_connect_timeout fastcgi_hide_header fastcgi_ignore_client_abort fastcgi_ignore_headers fastcgi_index fastcgi_intercept_errors fastcgi_max_temp_file_size fastcgi_next_upstream fastcgi_param fastcgi_pass_header fastcgi_pass_request_body fastcgi_pass_request_headers fastcgi_read_timeout fastcgi_send_lowat fastcgi_send_timeout fastcgi_split_path_info fastcgi_store fastcgi_store_access fastcgi_temp_file_write_size fastcgi_temp_path fastcgi_upstream_fail_timeout fastcgi_upstream_max_fails flv geoip_city geoip_country google_perftools_profiles gzip gzip_buffers gzip_comp_level gzip_disable gzip_hash gzip_http_version gzip_min_length gzip_no_buffer gzip_proxied gzip_static gzip_types gzip_vary gzip_window if_modified_since ignore_invalid_headers image_filter image_filter_buffer image_filter_jpeg_quality image_filter_transparency imap_auth imap_capabilities imap_client_buffer index ip_hash keepalive_requests keepalive_timeout kqueue_changes kqueue_events large_client_header_buffers limit_conn limit_conn_log_level limit_rate limit_rate_after limit_req limit_req_log_level limit_req_zone limit_zone lingering_time lingering_timeout lock_file log_format log_not_found log_subrequest map_hash_bucket_size map_hash_max_size master_process memcached_bind memcached_buffer_size memcached_connect_timeout memcached_next_upstream memcached_read_timeout memcached_send_timeout memcached_upstream_fail_timeout memcached_upstream_max_fails merge_slashes min_delete_depth modern_browser modern_browser_value msie_padding msie_refresh multi_accept open_file_cache open_file_cache_errors open_file_cache_events open_file_cache_min_uses open_file_cache_valid open_log_file_cache output_buffers override_charset perl perl_modules perl_require perl_set pid pop3_auth pop3_capabilities port_in_redirect postpone_gzipping postpone_output protocol proxy proxy_bind proxy_buffer proxy_buffer_size proxy_buffering proxy_buffers proxy_busy_buffers_size proxy_cache proxy_cache_key proxy_cache_methods proxy_cache_min_uses proxy_cache_path proxy_cache_use_stale proxy_cache_valid proxy_connect_timeout proxy_headers_hash_bucket_size proxy_headers_hash_max_size proxy_hide_header proxy_ignore_client_abort proxy_ignore_headers proxy_intercept_errors proxy_max_temp_file_size proxy_method proxy_next_upstream proxy_pass_error_message proxy_pass_header proxy_pass_request_body proxy_pass_request_headers proxy_read_timeout proxy_redirect proxy_send_lowat proxy_send_timeout proxy_set_body proxy_set_header proxy_ssl_session_reuse proxy_store proxy_store_access proxy_temp_file_write_size proxy_temp_path proxy_timeout proxy_upstream_fail_timeout proxy_upstream_max_fails random_index read_ahead real_ip_header recursive_error_pages request_pool_size reset_timedout_connection resolver resolver_timeout rewrite_log rtsig_overflow_events rtsig_overflow_test rtsig_overflow_threshold rtsig_signo satisfy secure_link_secret send_lowat send_timeout sendfile sendfile_max_chunk server_name_in_redirect server_names_hash_bucket_size server_names_hash_max_size server_tokens set_real_ip_from smtp_auth smtp_capabilities smtp_client_buffer smtp_greeting_delay so_keepalive source_charset ssi ssi_ignore_recycled_buffers ssi_min_file_chunk ssi_silent_errors ssi_types ssi_value_length ssl ssl_certificate ssl_certificate_key ssl_ciphers ssl_client_certificate ssl_crl ssl_dhparam ssl_engine ssl_prefer_server_ciphers ssl_protocols ssl_session_cache ssl_session_timeout ssl_verify_client ssl_verify_depth starttls stub_status sub_filter sub_filter_once sub_filter_types tcp_nodelay tcp_nopush thread_stack_size timeout timer_resolution types_hash_bucket_size types_hash_max_size underscores_in_headers uninitialized_variable_warn use user userid userid_domain userid_expires userid_mark userid_name userid_p3p userid_path userid_service valid_referers variables_hash_bucket_size variables_hash_max_size worker_connections worker_cpu_affinity worker_priority worker_processes worker_rlimit_core worker_rlimit_nofile worker_rlimit_sigpending worker_threads working_directory xclient xml_entities xslt_stylesheet xslt_typesdrew@li229-23`),r=t(`http mail events server types location upstream charset_map limit_except if geo map`),i=t(`include root server server_name listen internal proxy_pass memcached_pass fastcgi_pass try_files`),a;function o(e,t){return a=t,e}function s(e,t){e.eatWhile(/[\w\$_]/);var a=e.current();if(n.propertyIsEnumerable(a))return`keyword`;if(r.propertyIsEnumerable(a)||i.propertyIsEnumerable(a))return`controlKeyword`;var s=e.next();if(s==`@`)return e.eatWhile(/[\w\\\-]/),o(`meta`,e.current());if(s==`/`&&e.eat(`*`))return t.tokenize=c,c(e,t);if(s==`<`&&e.eat(`!`))return t.tokenize=l,l(e,t);if(s==`=`)o(null,`compare`);else if((s==`~`||s==`|`)&&e.eat(`=`))return o(null,`compare`);else if(s==`"`||s==`'`)return t.tokenize=u(s),t.tokenize(e,t);else if(s==`#`)return e.skipToEnd(),o(`comment`,`comment`);else if(s==`!`)return e.match(/^\s*\w*/),o(`keyword`,`important`);else if(/\d/.test(s))return e.eatWhile(/[\w.%]/),o(`number`,`unit`);else if(/[,.+>*\/]/.test(s))return o(null,`select-op`);else if(/[;{}:\[\]]/.test(s))return o(null,s);else return e.eatWhile(/[\w\\\-]/),o(`variable`,`variable`)}function c(e,t){for(var n=!1,r;(r=e.next())!=null;){if(n&&r==`/`){t.tokenize=s;break}n=r==`*`}return o(`comment`,`comment`)}function l(e,t){for(var n=0,r;(r=e.next())!=null;){if(n>=2&&r==`>`){t.tokenize=s;break}n=r==`-`?n+1:0}return o(`comment`,`comment`)}function u(e){return function(t,n){for(var r=!1,i;(i=t.next())!=null&&!(i==e&&!r);)r=!r&&i==`\\`;return r||(n.tokenize=s),o(`string`,`string`)}}var d={name:`nginx`,startState:function(){return{tokenize:s,baseIndent:0,stack:[]}},token:function(e,t){if(e.eatSpace())return null;a=null;var n=t.tokenize(e,t),r=t.stack[t.stack.length-1];return a==`hash`&&r==`rule`?n=`atom`:n==`variable`&&(r==`rule`?n=`number`:(!r||r==`@media{`)&&(n=`tag`)),r==`rule`&&/^[\{\};]$/.test(a)&&t.stack.pop(),a==`{`?r==`@media`?t.stack[t.stack.length-1]=`@media{`:t.stack.push(`{`):a==`}`?t.stack.pop():a==`@media`?t.stack.push(`@media`):r==`{`&&a!=`comment`&&t.stack.push(`rule`),n},indent:function(e,t,n){var r=e.stack.length;return/^\}/.test(t)&&(r-=e.stack[e.stack.length-1]==`rule`?2:1),e.baseIndent+r*n.unit},languageData:{indentOnInput:/^\s*\}$/}},f={language:()=>e.define(d),code:`server {
  listen 173.255.219.235:80;
  server_name website.com.au;
  rewrite / $scheme://www.$host$request_uri permanent; ## Forcibly prepend a www
}

server {
  listen 173.255.219.235:443;
  server_name website.com.au;
  rewrite / $scheme://www.$host$request_uri permanent; ## Forcibly prepend a www
}

server {

  listen      173.255.219.235:80;
  server_name www.website.com.au;

  root        /data/www;
  index       index.html index.php;

  location / {
    index index.html index.php;     ## Allow a static html file to be shown first
    try_files $uri $uri/ @handler;  ## If missing pass the URI to Magento's front handler
    expires 30d;                    ## Assume all files are cachable
  }

  ## These locations would be hidden by .htaccess normally
  location /app/                { deny all; }
  location /includes/           { deny all; }
  location /lib/                { deny all; }
  location /media/downloadable/ { deny all; }
  location /pkginfo/            { deny all; }
  location /report/config.xml   { deny all; }
  location /var/                { deny all; }

  location /var/export/ { ## Allow admins only to view export folder
    auth_basic           "Restricted"; ## Message shown in login window
    auth_basic_user_file /rs/passwords/testfile; ## See /etc/nginx/htpassword
    autoindex            on;
  }

  location  /. { ## Disable .htaccess and other hidden files
    return 404;
  }

  location @handler { ## Magento uses a common front handler
    rewrite / /index.php;
  }

  location ~ .php/ { ## Forward paths like /js/index.php/x.js to relevant handler
    rewrite ^/(.*.php)/ /$1 last;
  }

  location ~ \\\\.php$ {
    if (!-e $request_filename) { rewrite / /index.php last; } ## Catch 404s that try_files miss

    fastcgi_pass   127.0.0.1:9000;
    fastcgi_index  index.php;
    fastcgi_param PATH_INFO $fastcgi_script_name;
    fastcgi_param  SCRIPT_FILENAME $document_root$fastcgi_script_name;
    include        /rs/confs/nginx/fastcgi_params;
  }
}

server {

  listen              173.255.219.235:443;
  server_name         website.com.au www.website.com.au;

  root   /data/www;
  index index.html index.php;

  ssl                 on;
  ssl_certificate     /rs/ssl/ssl.crt;
  ssl_certificate_key /rs/ssl/ssl.key;

  ssl_session_timeout  5m;

  ssl_protocols  SSLv2 SSLv3 TLSv1;
  ssl_ciphers  ALL:!ADH:!EXPORT56:RC4+RSA:+HIGH:+MEDIUM:+LOW:+SSLv2:+EXP;
  ssl_prefer_server_ciphers   on;

  location / {
    index index.html index.php; ## Allow a static html file to be shown first
    try_files $uri $uri/ @handler; ## If missing pass the URI to Magento's front handler
    expires 30d; ## Assume all files are cachable
  }

  ## These locations would be hidden by .htaccess normally
  location /app/                { deny all; }
  location /includes/           { deny all; }
  location /lib/                { deny all; }
  location /media/downloadable/ { deny all; }
  location /pkginfo/            { deny all; }
  location /report/config.xml   { deny all; }
  location /var/                { deny all; }

  location /var/export/ { ## Allow admins only to view export folder
    auth_basic           "Restricted"; ## Message shown in login window
    auth_basic_user_file htpasswd; ## See /etc/nginx/htpassword
    autoindex            on;
  }

  location  /. { ## Disable .htaccess and other hidden files
    return 404;
  }

  location @handler { ## Magento uses a common front handler
    rewrite / /index.php;
  }

  location ~ .php/ { ## Forward paths like /js/index.php/x.js to relevant handler
    rewrite ^/(.*.php)/ /$1 last;
  }

  location ~ .php$ { ## Execute PHP scripts
    if (!-e $request_filename) { rewrite  /index.php last; } ## Catch 404s that try_files miss

    fastcgi_pass 127.0.0.1:9000;
    fastcgi_index  index.php;
    fastcgi_param PATH_INFO $fastcgi_script_name;
    fastcgi_param  SCRIPT_FILENAME $document_root$fastcgi_script_name;
    include        /rs/confs/nginx/fastcgi_params;

    fastcgi_param HTTPS on;
  }
}
`};export{f as default};