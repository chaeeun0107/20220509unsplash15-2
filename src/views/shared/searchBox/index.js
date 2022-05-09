import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { useState } from 'react';

import { IconSearch } from '../../../icons';

function SearchBox({ shape }) {
  const navigate = useNavigate();

  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/photos/${value}`);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Container className={`SearchBox ${shape}`}>
      <Form onSubmit={handleSubmit}>
        <Label>
          <Button>
            <IconSearch />
          </Button>
          <Input
            type="text"
            onChange={handleChange}
            placeholder="Search free high-resolution photos"
          />
        </Label>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
`;

const Form = styled.form`
  .round & {
    background-color: #eee;
    border-radius: 100px;
    height: 40px;
  }

  .square & {
    border-radius: 6px;
    height: 55px;
    background: #fff;
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  height: 100%;

  .round & {

  }

  .square & {

  }
`;

const Button = styled.button`
  display: flex;

  .round & {
    padding-left: 14px;
    width: 34px;
    height: 20px;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  .square & {
    padding-left: 12px;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

const Input = styled.input`
  width: 100%;

  .square & {
    font-size: 15px;
  }
`;

export default SearchBox;
