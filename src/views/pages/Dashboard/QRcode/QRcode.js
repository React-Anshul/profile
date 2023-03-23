import { Box, TableCell,TableBody,TableContainer ,Table,TableHead,TableRow} from "@material-ui/core";
import React from "react";
import FiltterSection from "src/component/FiltterSection";
import MainTable from "src/component/MainTable";
import TopHeaderSection from "src/component/TopHeaderSection";
import Pagination  from '@material-ui/lab/Pagination';


const qrcodedata=[  
  
  {
    username: "jatin",
   
    email:"jatin@mailinator.com",
    scan:"+91844512305",
  
    date:"",
    
  },
  {
    username: "jatin",
   
    email:"jatin@mailinator.com",
    scan:"+91844512305",
  
    date:"",
    
  },
  {
    username: "jatin",
   
    email:"jatin@mailinator.com",
    scan:"+91844512305",
  
    date:"",
    
  },
  {
    username: "jatin",
   
    email:"jatin@mailinator.com",
    scan:"+91844512305",
  
    date:"",
    
  },
  {
    username: "jatin",
   
    email:"jatin@mailinator.com",
    scan:"+91844512305",
  
    date:"",
    
  },
  {
    username: "jatin",
   
    email:"jatin@mailinator.com",
    scan:"+91844512305",
  
    date:"",
    
  },
  {
    username: "jatin",
   
    email:"jatin@mailinator.com",
    scan:"+91844512305",
  
    date:"",
    
  },
  {
    username: "jatin",
   
    email:"jatin@mailinator.com",
    scan:"+91844512305",
  
    date:"",
    
  },
]

export default function CropManagement() {
  return (
   
     <Box>
       <Box className="tophead">
          <TopHeaderSection heading="QR Code Management" />
        </Box>
       <Box className="mainContainer1">

        <FiltterSection type="qrcodeFiltter"/>
       </Box>
       <Box className="mainContainer1">
       <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>SR NO.</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Total Scan</TableCell>
              <TableCell>Registration Date & Time</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {qrcodedata.map((value, i) => (
              <MainTable value={value} i={i} type="qrcodemanagement"  />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box mt={1} display="flex" justifyContent="end">
          <Pagination count={10} variant="outlined" shape="rounded" />
          </Box>
       </Box>
      </Box>
    
  );
}
