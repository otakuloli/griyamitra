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
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'griyamitra' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
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
define( 'AUTH_KEY',         '95!gdUXMpYMr0E[%3[.X5Z9@RAHI8cP:1[A%H)xIt3CSv@@g#@z1Oc7J;R}S e;R' );
define( 'SECURE_AUTH_KEY',  '}ZK6AbG+^Gr+{6o`WDPhk|nDQ+|CH=bs+3 p6LCM1> sI-nO8Ybe%3&40Ix(gU&o' );
define( 'LOGGED_IN_KEY',    '2T6G8<Wn{7=wrGaJ;lN4tu;0n]A`nwYKy?]LUz:fH3/[#VYMo|T>6VI(3ieM(5.2' );
define( 'NONCE_KEY',        'oEln%~t8ssHhZ>FIY?xi2(qG(tqkICtn%E~an-8&8uC6(^wTeM>Q0QfC,h#E3r*V' );
define( 'AUTH_SALT',        'se$+>_+XmkrIo%Ph8H[vRd6!~;O7wCuf7?3@qG9qQ.f21jfW!UR*8ex:b8)EZJ]W' );
define( 'SECURE_AUTH_SALT', '!f<rgElInve^qtsmZIajEZG7g*OJ[7t~~s.N8$[plUq9-4;5vXSSP--t~/l#~_Lo' );
define( 'LOGGED_IN_SALT',   'qh`7cO{lBQ!e`}Hm3J0!B5NhP-MS|(Vz;2:RYWo>9lrB-cTdL~p@7wuQ[lok5}3%' );
define( 'NONCE_SALT',       '6@o+$N+xxwPMRzti`1#05hmz_X+H9<->hN:@p0.`gTCsxS{7qt&#iz{O/c1/=`v:' );

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
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
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
