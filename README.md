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

*Introduction

If you need a form api element that provides any number of sortable lists and
you can move elements from one to another and order them; you could use the
element type that this module provides.

*Installation
- Install as you would normally install a contributed drupal module. See:
https://drupal.org/documentation/install/modules-themes/modules-7
for further information.
- Install jquery-drop-down-widget
(https://github.com/karo73/jquery-drop-down-widget)
in sites/all/libraries.

*Usage
For using this module; you need to add an element to your form an use
'#type' => 'sortable_lists'; then in #options you provide the options
as you'll normally do for select/radios/checkboxes and in #columns you should
provide a key=>value array with column keys and names.
If you want to provide a #default_value index; this should have this structure:

'#default_value' => array(
  'sortable_lists' => array(
    'value' => '',
    'column1' => array(
      'key' => 'key',
      'key2' => 'key2',
      // More default selected options.
    ),
    'column2' => array(
      'key3' => 'key3',
      'key4' => 'key4',
      // More default selected options.
    ),
  ),
),

*Configuration
This module doesn't need any configuration; you just need to use it from your
source code.

*Maintainers
*Kevin Porras Zumbado (kporras07) - https://drupal.org/u/kporras07
