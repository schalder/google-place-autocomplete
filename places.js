<script>
  function initAutocomplete() {
      var addressInput = document.getElementById('address');
      var cityInput = document.getElementById('city');
      var stateInput = document.getElementById('state');
      var postalCodeInput = document.getElementById('postal_code');

      var autocomplete = new google.maps.places.Autocomplete(addressInput);

      autocomplete.addListener('place_changed', function() {
          var place = autocomplete.getPlace();
          if (!place.geometry) {
              console.error("Autocomplete's returned place contains no geometry");
              return;
          }

          // Set address, city, state, and postal code values
          place.address_components.forEach(function(component) {
              if (component.types.includes('street_number') || component.types.includes('route')) {
                  addressInput.value = component.long_name + ' ' + addressInput.value;
              } else if (component.types.includes('locality')) {
                  cityInput.value = component.long_name;
              } else if (component.types.includes('administrative_area_level_1')) {
                  stateInput.value = component.long_name;
              } else if (component.types.includes('postal_code')) {
                  postalCodeInput.value = component.long_name;
              }
          });
      });
  }
</script>
