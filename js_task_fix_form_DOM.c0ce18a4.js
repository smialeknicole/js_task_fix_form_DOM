"use strict";var inputs=document.querySelectorAll("form input");inputs.forEach(function(e){var t=document.createElement("label");t.classList.add("field-label"),t.setAttribute("for",e.id),t.textContent=e.name.charAt(0).toUpperCase()+e.name.slice(1),e.placeholder=e.name.charAt(0).toUpperCase()+e.name.slice(1),e.parentElement.append(t)});
//# sourceMappingURL=js_task_fix_form_DOM.c0ce18a4.js.map
