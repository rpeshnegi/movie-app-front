import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { debounce } from 'lodash';
import AppBox from '../../components/AppBox';
import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { AxiosResponse } from 'axios';
import { Movie } from './types';
import axiosInstance from '../../utils/axiosInstance';
import AppModal from '../../components/AppModal';

export default function BasicTable() {
    const [search, setSearch] = React.useState<string>('');
    const [movies, setMovies] = React.useState<Movie[]>([]);
    const [errors, setErrors] = React.useState<string>('');
    const [openModal, setOpenModal] = React.useState<boolean>(false);

    const getMovies = React.useCallback(async (query: string = '') => {
        try {
            const res: AxiosResponse = await axiosInstance.get(`movies?query=${query}`)
            setMovies(res.data);
        } catch (e) {
            console.log(e)
        }
    }, [])

    const getData = React.useCallback(debounce((value: string) => {
        getMovies(value)
    }, 300), []);

    React.useEffect(() => {
        getData(search)
        return () => {
            getData.cancel();
        };
    }, [search, getData]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        let name = data.get('name')
        let description = data.get('description')
        try {
            const res: AxiosResponse = await axiosInstance.post(`movies`, { name, description })
            getMovies()
            setOpenModal(false)
        } catch (error: any) {
            console.log(error)
            setErrors(error.message[0])
        }
    };

    return (
        <>
            <AppBox style={{ background: 'white', padding: '2rem' }}>
                <Box display="grid" sx={{ justifyContent: 'space-between', display: 'flex' }}>
                    <Box style={{ marginBottom: '2rem' }}>
                        <TextField value={search} onChange={(e) => setSearch(e.target.value)} />
                    </Box>
                    <Box>
                        <Button onClick={() => setOpenModal(true)} variant="contained">Add Movie</Button>
                    </Box>
                </Box>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Description</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {movies.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.description}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <AppModal open={openModal} onClose={setOpenModal}>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="name"
                            name="name"
                            autoFocus
                            error={!!errors}
                            helperText={errors}
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            name="description"
                            label="description"
                            id="description"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Save
                        </Button>
                    </Box>
                </AppModal>
            </AppBox>
        </>
    );
}
