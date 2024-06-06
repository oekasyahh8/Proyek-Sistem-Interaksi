<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '8)!gy`i{n&|{?s(p+p~{3@u_*(^/6]k?} 4I_b-rac$)*tQ#kl1d4h$KYp=65t#A' );
define( 'SECURE_AUTH_KEY',  ':o LI!7>{2R3B)ciNdq1(~66u )8+ I65EE;7-# oHeB#<k&&<cKpz<qYYd;s Gy' );
define( 'LOGGED_IN_KEY',    'x!L)2xm#z(y1et7Sr1zkg}OO.m?4/-nmE4o(##lCm_yzb@neFGKk%]S6%A7;WWV+' );
define( 'NONCE_KEY',        '4{^]3(`P!$>pn(b_lj;}nGx}_[,,c72}Z{VCt!Ac)bo]2$Pp,TAF$OV&Hb7udg<j' );
define( 'AUTH_SALT',        '$%73vxqNas!.@`K}K|I$l(^]<m#,R.Ft%4,U@D;UG[ZnM&c/R+~vm3wAM)NFjLE$' );
define( 'SECURE_AUTH_SALT', '<+]qyqdp%_h!#Jz 4 MK#@Op`;Ko@[bf3!{!H#41H2*x2j:iBC}p_AIbFuZg_O|p' );
define( 'LOGGED_IN_SALT',   'iS,pK(E{PF?2dE;X.??s2+7Nb<n$V#UPY3$ic<7:/R+dwYXB:p,?>?c$;}~U`>} ' );
define( 'NONCE_SALT',       'K=JjF//KMra8R+_p6UuK0hp`R1&fv8rIJysYQ%1Bo^-,Uuz7M9(FuAAToY},BW93' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
