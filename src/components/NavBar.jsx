export default function NavBar() {
  const navmenu = [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "CS",
    "자료구조",
    "북마크",
  ];
  return (
    <header>
      <nav>
        <ul>
          {navmenu.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>
        <h1>devQ</h1>
      </nav>
    </header>
  );
}
