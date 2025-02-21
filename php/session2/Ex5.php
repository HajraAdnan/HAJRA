<?php

$colors = array("Pink", "Blue", "Green", "Yellow", "Grey");

echo "Color names in the array:\n";
foreach ($colors as $color) {
    echo $color . "\n";
}

$colors[] = "Purple";

echo "\nUpdated list of colors:\n";
foreach ($colors as $color) {
    echo $color . "\n";
}
?>
