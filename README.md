CONTENTS OF THIS FILE
---------------------

 * Introduction
 * Installation
 * Usage
 * Configuration
 * Maintainers

This module provides a Form API element type for having sortable lists.
This is a module for be used by a developer, due to that it doesn't provide any
UI itself; you MUST use it in your code.


INTRODUCTION
------------

If you need a form api element that provides any number of sortable lists and
you can move elements from one to another and order them; you could use the
element type that this module provides.


INSTALLATION
------------

 * Install as you would normally install a contributed drupal module. See:
   https://drupal.org/documentation/install/modules-themes/modules-7
   for further information.
 * Install jquery-drop-down-widget
   (https://github.com/karo73/jquery-drop-down-widget)
   in sites/all/libraries.


USAGE
-----

For using this module; you need to add an element to your form an use
'#type' => 'sortable_lists'; then in #options you provide the options
as you'll normally do for select/radios/checkboxes and in #columns you should
provide a key => value array with column keys and names.
If you want to provide a #default_value index; this should have a detailed structure.

For more information on this; please take a look at example module
included (sortable_lists_example)


CONFIGURATION
-------------

This module doesn't need any configuration; you just need to use it from your
source code.


MAINTAINERS
-----------

Current maintainers:
 * Kevin Porras Zumbado (kporras07) - https://drupal.org/u/kporras07


This project has been sponsored by:
 * MANATI
   A small company of talented people, with experience in the whole
   Drupal stack. Open Source and accessibility fanatics, we focus in making
   websites for human beings. We love robots, gadgets and surfing the web
   from any device.
