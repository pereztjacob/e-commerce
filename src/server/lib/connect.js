/* eslint no-console: "off" */
import mongoose from 'mongoose';

export default function(dbUri){

  const promise = mongoose.connect(dbUri);

  mongoose.connection.on('connected', () => {
    console.log('Mongoose default connection open to ' + dbUri);
  });

  mongoose.connection.on('error', (err) => {
    console.log('Mongoose default connection error: ' + err);
  });

  mongoose.connection.on('disconnected', () => {
    console.log('mongoose default connection disconnected');
  });

  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('Mongoose default connection disconnected through app termination');
      process.exit(0);
    });
  });

  return promise;
}