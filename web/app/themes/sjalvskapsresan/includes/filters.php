<?php
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