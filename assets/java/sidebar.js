function myFunction(x) {
  x.classList.toggle("change");
}

document.getElementById('toggleSidebar').addEventListener('click', function() {
      const sidebar = document.querySelector('.sidebar');
      const content = document.querySelector('.content');

      if (sidebar.style.left === "0px") {
        sidebar.style.left = "-250px";
        content.style.marginLeft = "0";
      } else {
        sidebar.style.left = "0";
        content.style.marginLeft = "250px";
      }
    });