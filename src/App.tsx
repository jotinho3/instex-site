import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Logo from '../public/instex_logo-1-1.webp';

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      {/* Header */}
      <header className="bg-black text-white p-4 flex sm:justify-around justify-between items-center">
        <img className='w-20' src={Logo} alt="Logo" />
        <nav className="hidden md:flex space-x-4">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About</a>
        </nav>
        <div className="md:hidden">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer"
            onClick={toggleMenu}
          >
            ☰
          </motion.div>
        </div>
      </header>
      {menuOpen && (
        <motion.nav
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          className="bg-black text-white p-4 md:hidden"
        >
          <a href="#home" className="block py-2 hover:text-gray-400">Home</a>
          <a href="#about" className="block py-2 hover:text-gray-400">About</a>
        </motion.nav>
      )}

      {/* Hero Section */}
      <motion.section
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: 'url(../public/bg-instex.webp)' }}
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl font-bold">Hero Text</h1>
          <div className="mt-4 flex space-x-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Action 1</button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Action 2</button>
          </div>
        </div>
      </motion.section>

      {/* Card Section */}
      <motion.section
        className="p-8"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row justify-around text-center">
          <motion.div
            className="bg-white rounded shadow-lg mb-4 md:mb-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-bold">PEÇAS LISAS</h3>
            <p className="mt-2">Pronta entrega direto pra sua loja</p>
            <img src="../public/camiseta_algodao_estampada_1.webp" alt="Description" className="w-full h-auto" />
          </motion.div>
          <motion.div
            className="bg-white p-4 rounded shadow-lg mb-4 md:mb-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl font-bold">PRODUZA MARCA</h3>
            <p className="mt-2">Sua etiqueta e estampa</p>
            <img src="../public/camiseta_preta_algodao.webp" alt="Description" className="w-full h-auto" />
          </motion.div>
          <motion.div
            className="bg-white p-4 rounded shadow-lg mb-4 md:mb-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-xl font-bold">MODELAGENS</h3>
            <p className="mt-2">Baixe modelagens para produzir</p>
            <img src="../public/over_branca_frente_1.webp" alt="Description" className="w-full h-auto" />
          </motion.div>
        </div>
      </motion.section>

       {/* New Section with Title and Button */}
       <motion.section
        className="p-8 text-center"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-4">A melhor solução para sua marca!</h2>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">Saiba Mais</button>
      </motion.section>

      {/* Image and Text Section */}
      <motion.section
        className="flex flex-col md:flex-row p-8"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        transition={{ duration: 0.5 }}
      >
        <div className="md:w-1/2">
          <img src="../public/ESTAMPA-TOQUE-ZERO.webp" alt="Description" className="w-full h-auto" />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center p-4">
          <h2 className="text-3xl font-bold">Crie Sua Marca de Roupas
          </h2>
          <p className="mt-4">Personalizamos suas peças com sua etiqueta e aplicamos suas ideias nas estampas, usando diversas técnicas de estamparia. Trabalhamos com malhas 100% algodão ou 96% algodão e 4% elastano, garantindo qualidade e conforto. Toda a produção é feita com costura industrial, resultando em peças exclusivas e totalmente personalizadas para a sua marca.</p>
          <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn More</button>
        </div>
      </motion.section>

        <motion.section
          className="p-8"
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
          <motion.div
            key={i}
            className="bg-white p-4 rounded shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            {i === 1 && (
              <>
            <h3 className="text-xl font-bold">E-Commerce</h3>
            <p className="mt-2">Masculino</p>
            <p className="mt-2">Feminino</p>
            <p className="mt-2">Coleções para Revenda</p>
              </>
            )}
            {i === 2 && (
              <>
            <h3 className="text-xl font-bold">E-book</h3>
            <p className="mt-2">Crie sua Marca de Roupas</p>
            <p className="mt-2">Modelagens</p>
            <p className="mt-2">Tipos de Estamparia e Bordados</p>
              </>
            )}
            {i === 3 && (
              <>
            <h3 className="text-xl font-bold">Cursos</h3>
            <p className="mt-2">Costura e Confecção</p>
            <p className="mt-2">Malhas e Tecidos</p>
            <p className="mt-2">Montando uma confecção ou Terceirzando</p>
              </>
            )}
            {i === 4 && (
              <>
            <h3 className="text-xl font-bold">Modelagens</h3>
            <p className="mt-2">Modelagens Masculinas</p>
            <p className="mt-2">Modelagens Femininas</p>
            <p className="mt-2">Como usar as Modelagens</p>
              </>
            )}
            {i === 5 && (
              <>
            <h3 className="text-xl font-bold">Estampas Download</h3>
            <p className="mt-2">Pack de Artes de Estampas</p>
              </>
            )}
            {i === 6 && (
              <>
            <h3 className="text-xl font-bold">Softwares de Download</h3>
            <p className="mt-2">Audaces</p>
            <p className="mt-2">CorelDraw</p>
            <p className="mt-2">PhotoShop</p>
              </>
            )}
          </motion.div>
            ))}
          </div>
        </motion.section>



        {/* Footer */}
      <motion.footer
        className="bg-black text-white p-8 text-center"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        transition={{ duration: 0.5 }}
      >
        <div className="text-lg font-bold">Logo</div>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="mailto:example@example.com">Email</a>
          <a href="#contact">Contact</a>
        </div>
        <p className="mt-4">Especialista em Têxtil, Produção e Marcas de Roupa.</p>
      </motion.footer>
    </>
  );
}

export default App;