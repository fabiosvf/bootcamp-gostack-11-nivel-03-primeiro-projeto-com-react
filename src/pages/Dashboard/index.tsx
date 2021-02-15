import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/53756627?s=460&u=69f444bf4281fe4291121e85c1db27d49b2ec71d&v=4"
            alt="Fabio Silva Ferreira"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>asd flajksdfla sflkjsdfl asdjflas dflsdjkf dls</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/53756627?s=460&u=69f444bf4281fe4291121e85c1db27d49b2ec71d&v=4"
            alt="Fabio Silva Ferreira"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>asd flajksdfla sflkjsdfl asdjflas dflsdjkf dls</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/53756627?s=460&u=69f444bf4281fe4291121e85c1db27d49b2ec71d&v=4"
            alt="Fabio Silva Ferreira"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>asd flajksdfla sflkjsdfl asdjflas dflsdjkf dls</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/53756627?s=460&u=69f444bf4281fe4291121e85c1db27d49b2ec71d&v=4"
            alt="Fabio Silva Ferreira"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>asd flajksdfla sflkjsdfl asdjflas dflsdjkf dls</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
