<?php
add_filter( 'wp_calculate_image_sizes', function( $sizes, $size, $image_src, $image_meta, $attachment_id ) {
    return '(min-width: 900px) 960px, 100vw';
}, 10, 5 );

add_filter( 'post_list_item_classes', function( $classes, $post_id ) {
    global $post;
    var_dump($post_id, $post->ID);
    if ( $post_id == $post->ID ) {
        $classes .= ' posts-list__item--active';
    }
    return $classes;
}, 10, 2 );

add_filter( 'embed_oembed_html', function( $html, $url, $attr, $post_id ) {
    return '<div class="post__embed-wrapper"><div class="post__embed">' . $html . '</div></div>';
}, 10, 4 );

/**
 * Tar bort <div> runt bilder med caption samt ändrar markup för caption.
 */
add_filter( 'img_caption_shortcode', function( $output, $attr, $content ) {
    return $content . '<span class="post__caption">'.$attr['caption'].'</span>';
}, 10, 3 );

/**
 * Kollar om händelsen i tidslinjen har passerat eller ej.
 * Isf läggs klassen "timeline__item--passed" på.
 */
add_filter( 'timeline_item_classes', function( $classes, $event_time ) {
    if ( empty( $event_time ) ) return $classes;
    $now = time();
    $event_time = strtotime( $event_time );
    if ( $now > $event_time ) {
        $classes .= ' timeline__item--passed';
    } 
    return $classes;
}, 10, 2 );

add_filter( 'timeline_item_day_classes', function( $classes, $day ) {
    if ( empty( $day['date'] ) ) return $classes;
    $today = date('Ymd');
    if ( $today <= $day['date'] ) {
        $classes .= ' timeline__item--upcoming';
    } else {
        $classes .= ' timeline__item--passed';
    }
    return $classes;
}, 10, 2 );

/**
 * Lägg till extra classer på body
 */
function add_body_classes( $classes ) {
    return $classes;
}
add_filter( 'body_class', 'add_body_classes' );