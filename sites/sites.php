<?php

$sites['stmartinus.dev'] = 'stmartinus';
$sites['schoolplatform.dev'] = 'schoolplatform';

/**
 * Write logic here
 */

//Sites folders are dynamic.
//Allows them to add Own domain.

$sitesList = scandir ( "sites" );
$ignored = array('.','..','all','default','template');
$cwd = getcwd();
foreach($sitesList as $site) {
  if (!in_array($site, $ignored)) {
    if (file_exists($cwd . '/sites/' .$site . '/sites.php')) {
      include_once($cwd . '/sites/' . $site . '/sites.php');
    }
  }
}


