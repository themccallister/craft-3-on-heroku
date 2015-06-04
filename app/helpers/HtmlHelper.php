<?php
/**
 * @link http://buildwithcraft.com/
 * @copyright Copyright (c) 2015 Pixel & Tonic, Inc.
 * @license http://buildwithcraft.com/license
 */

namespace craft\app\helpers;

use yii\helpers\Html;

/**
 * Class HtmlHelper
 *
 * @author Pixel & Tonic, Inc. <support@pixelandtonic.com>
 * @since 3.0
 */
class HtmlHelper extends Html
{
	/**
	 * Will take an HTML string and an associative array of key=>value pairs, HTML encode the values and swap them back
	 * into the original string using the keys as tokens.
	 *
	 * @param string $html      The HTML string.
	 * @param array  $variables An associative array of key => value pairs to be applied to the HTML string using `strtr`.
	 *
	 * @return string The HTML string with the encoded variable values swapped in.
	 */
	public static function encodeParams($html, $variables = array())
	{
		// Normalize the param keys
		$normalizedVariables = array();

		if (is_array($variables))
		{
			foreach ($variables as $key => $value)
			{
				$key = '{'.trim($key, '{}').'}';
				$normalizedVariables[$key] = static::encode($value);
			}

			$html = strtr($html, $normalizedVariables);
		}

		return $html;
	}
}
