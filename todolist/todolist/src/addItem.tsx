import { useState } from 'react';
import { TextField, Button, Stack } from '@mui/material';
import { Item } from './App';

type Props = {
  addItem: (item: Item) => void;
};

export default function Additem({ addItem }: Props) {
  const [product, setProduct] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (product.trim() === '' || amount.trim() === '') return;
    addItem({ product, amount });
    setProduct('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="row" spacing={2} mt={2} mb={2}>
        <TextField
          label="Product"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
        />
        <TextField
          label="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Button type="submit" variant="contained">
          Add
        </Button>
      </Stack>
    </form>
  );
}
