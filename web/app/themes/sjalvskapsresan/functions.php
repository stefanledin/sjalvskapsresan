<?php
/**
 * Timber
 */
require_once($root_dir . '/vendor/autoload.php');
$timber = new \Timber\Timber();

$timber::$dirname = array('templates', 'views');

/**
 * Content
 *
 * 1. Custom post types
 * 2. Enqueue scripts and styles
 * 3. Images
 * 4. Filters
 * 5. Actions
 * 6. Menus
 * 7. Helpers
 */
require 'includes/custom-post-types.php';

require 'includes/enqueue-scripts-styles.php';

require 'includes/images/images.php';
require 'includes/images/custom-image-sizes.php';

require 'includes/filters.php';

require 'includes/actions.php';

require 'includes/menus.php';

require 'includes/helpers.php';

if ( function_exists('acf_add_options_page') ) {
    acf_add_options_page( array(
        'page_title' => 'Reseplan',
        'icon_url' => 'dashicons-location-alt'
    ) );
}