
function noDuplicate(objects){

	var usedObjects = {};
	for (i=0; i<objects.length; i++) {
		var so = JSON.stringify(objects[i]);

        if (usedObjects[so]) {
            objects.splice(i, 1);
        } else {
            usedObjects[so] = true;          
        }
	}
	return objects;
}

