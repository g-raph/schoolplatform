<?php
/**
 * @file
 * pocomas_block.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function pocomas_block_ctools_plugin_api() {
  list($module, $api) = func_get_args();
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_node_info().
 */
function pocomas_block_node_info() {
  $items = array(
    'block' => array(
      'name' => t('Block'),
      'base' => 'node_content',
      'description' => t('Een block is een kort stuk inhoud dat op meerdere pagina\'s in \'blokvorm\' geplaatst kan worden, meestal in een zijbalk.'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  return $items;
}
