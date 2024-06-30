import React from "react";
import { Grid, Paper, Typography } from "@mui/material";

const Dashboard = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Course Status</Typography>
            {/* Add your content here */}
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Course Progress</Typography>
            {/* Add your content here */}
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Most Popular Courses</Typography>
            {/* Add your content here */}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
