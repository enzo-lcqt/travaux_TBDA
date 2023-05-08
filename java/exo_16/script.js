function updateTextArea() {
			var selectBox = document.getElementById("environnement");
			var selectedValue = selectBox.options[selectBox.selectedIndex].value;
			var textArea = document.getElementById("autretechnique");
			if (selectedValue == "choisir") {
				textArea.value = "";
			} else {
				textArea.value = selectedValue;
			}
		}