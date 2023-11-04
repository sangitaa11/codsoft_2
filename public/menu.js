
    function search() {
      const select = document.getElementById("searchSelect");
      const selectedValue = select.options[select.selectedIndex].value;
      window.location.href = selectedValue;
    }
    function Login() {
      window.location.href = "/login";
    }
    function Register() {
      window.location.href = "/register";
    }