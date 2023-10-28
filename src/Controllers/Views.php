<?php

namespace App\Controllers;

use Lemon\Templating\Template;

class Views
{
	public function handle(): Template
	{
		return template("app.views");
	}
}
