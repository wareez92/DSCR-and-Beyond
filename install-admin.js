import fs from 'fs';
import path from 'path';

const root = process.cwd();
const pkgRoot = path.dirname(new URL(import.meta.url).pathname).replace(/^\//,'');

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name), d = path.join(dest, entry.name);
    entry.isDirectory() ? copyDir(s,d) : fs.copyFileSync(s,d);
  }
}

copyDir(path.join(pkgRoot, 'server'), path.join(root, 'server'));
copyDir(path.join(pkgRoot, 'db'), path.join(root, 'db'));
copyDir(path.join(pkgRoot, 'src', 'admin'), path.join(root, 'src', 'admin'));

const appPath = path.join(root, 'src', 'App.jsx');
let app = fs.readFileSync(appPath, 'utf8');
if (!app.includes('"./admin/Admin"')) {
  app = app.replace('import { useState } from "react";', 'import { useEffect, useState } from "react";');
  app = app.replace('import About from "./About";', 'import About from "./About";\nimport Admin from "./admin/Admin";');
  app = app.replace('const portfolioItems = [', 'const fallbackPortfolioItems = [');
  app = app.replace('const blogs = [', 'const fallbackBlogs = [');
  const marker = '  const connect = {';
  const injection = `  const [portfolioItems, setPortfolioItems] = useState(fallbackPortfolioItems);\n  const [blogs, setBlogs] = useState(fallbackBlogs);\n\n  useEffect(() => {\n    fetch(\`${'${import.meta.env.VITE_API_URL || "http://localhost:4000"}'}/api/content\`)\n      .then((res) => res.json())\n      .then((data) => {\n        if (Array.isArray(data.portfolioItems)) setPortfolioItems(data.portfolioItems);\n        if (Array.isArray(data.blogs)) setBlogs(data.blogs);\n      })\n      .catch(() => {});\n  }, []);\n\n`;
  app = app.replace(marker, injection + marker);
  app = app.replace('  return (\n    <>', '  if (window.location.pathname.startsWith("/admin")) return <Admin />;\n\n  return (\n    <>');
  fs.writeFileSync(appPath, app);
}

const rootPkgPath = path.join(root, 'package.json');
const pkg = JSON.parse(fs.readFileSync(rootPkgPath, 'utf8'));
pkg.scripts = { ...pkg.scripts, 'server': 'npm --prefix server run dev', 'server:seed': 'npm --prefix server run seed' };
fs.writeFileSync(rootPkgPath, JSON.stringify(pkg, null, 2) + '\n');

fs.writeFileSync(path.join(root, 'server', '.env.example'), `DATABASE_URL=postgresql://postgres:YOUR_PASSWORD@localhost:5432/dscr_beyond\nJWT_SECRET=replace-with-a-long-random-string\nADMIN_EMAIL=admin@example.com\nADMIN_PASSWORD=change-this-password\nPORT=4000\n`);
console.log('Admin panel files installed.');
console.log('Next: create the PostgreSQL database, copy server/.env.example to server/.env, then run:');
console.log('  npm --prefix server install');
console.log('  psql -U postgres -d dscr_beyond -f db/schema.sql');
console.log('  npm run server:seed');
console.log('  npm run server');
console.log('  npm run dev');
