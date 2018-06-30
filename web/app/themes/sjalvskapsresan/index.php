<?php
use Carbon\Carbon;

$context = Timber::get_context();
date_default_timezone_set('Europe/Stockholm');

$trip_start = strtotime( get_field('trip_start', 'option') );
$trip_end  = get_field('trip_end', 'option');
$now = new Carbon();
$context['trip_has_started'] = ( $now->timestamp < strtotime( $trip_start ) );
if ( ! $context['trip_has_started'] ) {
    $trip_start = Carbon::createFromTimestamp( $trip_start );
    $countdown = $now->diff( $trip_start );
    $context['countdown'] = sprintf('T-minus: <time>%s/%s:%s:%s</time>', $countdown->d, $countdown->h, $countdown->i, $countdown->s);
}
$context['timeline'] = get_field('timeline', 'options');

Timber::render( 'index.twig', $context );