<?php
/**
 * @file
 * pocomas_slideshow.features.inc
 */

/**
 * Implementation of hook_node_info().
 */
function pocomas_slideshow_node_info() {
  $items = array(
    'slideshow' => array(
      'name' => t('Slideshow'),
      'base' => 'node_content',
      'description' => t('A slideshow of images and text.'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  return $items;
}
