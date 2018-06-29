<?php
$context = Timber::get_context();

$trip_start = get_field('trip_start', 'option');
$trip_end  = get_field('trip_end', 'option');
$context['trip_has_started'] = time() < strtotime( $trip_start );
$context['trip_timer'] = $trip_start;
$context['timeline'] = get_field('timeline', 'options');

Timber::render( 'index.twig', $context );