
function login() {
  const u = document.getElementById('username').value.trim();
  const p = document.getElementById('password').value.trim();
  if (u === 'admin' && p === '1234') {
    localStorage.setItem("login", "true");
    document.getElementById('login').style.display = 'none';
    document.getElementById('main').style.display = 'block';
    renderRooms();
  } else {
    alert('รหัสผ่านไม่ถูกต้อง');
  }
}

function renderRooms() {
  const container = document.getElementById("room-list");
  container.innerHTML = "";
  const rooms = JSON.parse(localStorage.getItem("rooms") || "[]");
  if (rooms.length === 0) {
    container.innerHTML = "<p>ยังไม่มีห้อง กรุณาเพิ่มห้องใหม่</p>";
    return;
  }
  rooms.forEach(room => {
    const div = document.createElement("div");
    div.className = "bg-gray-800 p-4 rounded";
    div.innerHTML = `<b>${room.name}</b><br>โครงการ: ${room.project}<br>ค่าเช่า: ${room.rent}`;
    container.appendChild(div);
  });
}

window.onload = function () {
  if (localStorage.getItem("login") === "true") {
    document.getElementById("login").style.display = "none";
    document.getElementById("main").style.display = "block";
    renderRooms();
  }
};
