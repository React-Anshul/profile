import { Box,
    TableCell,
    TableBody,
    TableContainer,
    Table,
    TableHead,
    TableRow,
} from '@material-ui/core'
import React from 'react'
import MainTable from "src/component/MainTable";

import TopHeaderSection from "src/component/TopHeaderSection";
import Pagination  from '@material-ui/lab/Pagination';

const agencydata =[
    {
        agencyname:"Jio Fiber",
        email:"jatindutt@gmail.com",
        service:"2",
        servicetype:"Internet",
    },
    {
        agencyname:"Security",
        email:"jatindutt@gmail.com",
        service:"2",
        servicetype:"Security",
    },
    {
        agencyname:"KYC Agent",
        email:"jatindutt@gmail.com",
        service:"2",
        servicetype:"Kyc management",
    },
    {
        agencyname:"Loan recovery",
        email:"jatindutt@gmail.com",
        service:"2",
        servicetype:"loan recovery",
    },
    {
        agencyname:"Cards",
        email:"jatindutt@gmail.com",
        service:"2",
        servicetype:"Generation",
    },
]

export default function index() {
  return (
    <Box>
    <Box className="tophead">
       <TopHeaderSection heading="Agency Management" />
     </Box>
   
    <Box className="mainContainer1">
    <TableContainer>
     <Table>
       <TableHead>
         <TableRow>
           <TableCell>SR NO.</TableCell>
           <TableCell>Agency Name</TableCell>
           <TableCell>Email</TableCell>
           <TableCell>Service Provided</TableCell>
           <TableCell>Type of Service</TableCell>
           <TableCell>Action</TableCell>
         </TableRow>
       </TableHead>
       <TableBody>
         {agencydata.map((value, i) => (
           <MainTable value={value} i={i} type="agencymanagement"  />
         ))}
       </TableBody>
     </Table>
   </TableContainer>
   <Box mt={1} display="flex" justifyContent="end">
       <Pagination count={10} variant="outlined" shape="rounded" />
       </Box>
    </Box>
   </Box>
  )
}
