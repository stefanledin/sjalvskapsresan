<?php
use Carbon\Carbon;

$context = Timber::get_context();
date_default_timezone_set('Europe/Stockholm');

$trip_start = strtotime( get_field('trip_start', 'option') );
$trip_end  = get_field('trip_end', 'option');
$now = new Carbon();
$context['trip_has_started'] = ( $now->timestamp < strtotime( $trip_start ) );
$trip_start = Carbon::createFromTimestamp( $trip_start );
if ( ! $context['trip_has_started'] ) {
    $countdown = $now->diff( $trip_start );
    $context['counter'] = sprintf('T-minus: <time>%s/%s:%s:%s</time>', $countdown->d, $countdown->h, $countdown->i, $countdown->s);
} else {
    $counter = $trip_start->diff( $now );
    $context['counter'] = sprintf('MET: <time>%s/%s:%s:%s</time>', $counter->d, $counter->h, $counter->i, $counter->s);
}
$context['timeline'] = get_field('timeline', 'options');

$context['posts'] = new Timber\PostQuery( array( 
    'posts_per_page' => -1,
    'order' => 'ASC'
) );
if ( is_home() ) {
    $context['post'] = end( $context['posts'] );
} else {
    $context['post'] = Timber::query_post();
}

Timber::render( 'index.twig', $context );