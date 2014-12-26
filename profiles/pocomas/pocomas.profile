<?php

/**
 * Implements hook_form_FORM_ID_alter().
 *
 * Allows the profile to alter the site configuration form.
 */
function pocomas_form_install_configure_form_alter(&$form, $form_state) {
  // Pre-populate the site name with the server name.
  $form['site_information']['site_name']['#default_value'] = $_SERVER['SERVER_NAME'];

  // Set the default username for the administrator.
  $form['admin_account']['account']['name']['#default_value'] = 'admin';

  // Set Belgium as the default country.
  $form['server_settings']['site_default_country']['#default_value'] = 'BE';

  // Set Europe/Brussels as the default time zone.
  $form['server_settings']['date_default_timezone']['#default_value'] = 'Europe/Brussels';
}
