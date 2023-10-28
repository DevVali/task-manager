<?php

namespace App\Controllers;

use Lemon\Templating\Template;

class Projects
{
	public function handle(): Template
	{
		return template("app.projects");
	}
}
