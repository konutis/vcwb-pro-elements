<?php
/**
Plugin Name: VCWB Pro Elements
Plugin URI: https://github.com/konutis/vcwb-pro-elements
Description: VCWB Pro Elements
Version: 1.0
Author: Janis Konutis
Author URI: https://github.com/konutis/vcwb-pro-elements
*/

// don't load directly
if (!defined('ABSPATH')) {
    die('-1');
}

add_action(
/**
 * @param $api \VisualComposer\Modules\Api\Factory
 */
    'vcv:api',
    function ($api) {
        $elementsToRegister = [
            'proScrollToTopButton',
            'proHeading',
            'proModalBox',
        ];
        $pluginBaseUrl = rtrim(plugins_url(basename(__DIR__)), '\\/');
        /** @var \VisualComposer\Modules\Elements\ApiController $elementsApi */
        $elementsApi = $api->elements;
        foreach ($elementsToRegister as $tag) {
            $manifestPath = __DIR__ . '/elements/' . $tag . '/manifest.json';
            $elementBaseUrl = $pluginBaseUrl . '/elements/' . $tag;
            $elementsApi->add($manifestPath, $elementBaseUrl);
        }
    }
);
