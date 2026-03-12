<?php

$data = json_decode(file_get_contents("php://input"), true);

file_put_contents("server-script.js", $data["script"]);

echo "done";

?>