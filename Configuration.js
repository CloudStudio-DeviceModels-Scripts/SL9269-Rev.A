function getConfiguration(config) 
{ 
	config.addressLabel = {en: "MAC Address", es: "MAC Address"};
}

function getEndpoints(deviceAddress, endpoints)
{
  endpoints.addEndpoint("1", "Temperature", endpointType.temperatureSensor);
  var level = endpoints.addEndpoint("2", "Pump 1", endpointType.genericSensor);
  level.variableTypeId = 1260;
  var ang = endpoints.addEndpoint("3", "Pump 2", endpointType.genericSensor);
  ang.variableTypeId = 1260;
  var bat = endpoints.addEndpoint("4", "Tank Level", endpointType.genericSensor);
  bat.variableTypeId = 1261;
}

function validateDeviceAddress(address, result)
{
  if (address.length != 16) {
    result.ok = false;
    result.errorMessage = {
      en: "The address must be 16 characters long.", 
      es: "La dirección debe tener exactamente 16 caracteres."
    };
  }
}

function updateDeviceUIRules(device, rules)
{
  rules.canCreateEndpoints = true;
}

function updateEndpointUIRules(endpoint, rules)
{
  rules.canDelete = true;
  rules.canEditSubtype = true;
}