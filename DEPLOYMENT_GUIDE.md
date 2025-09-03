# Portfolio Deployment Guide - Render.com

This guide will help you deploy your React portfolio with Node.js backend to Render.com as web services.

## Prerequisites
- GitHub repository: https://github.com/aman-4848/my-Portfolio
- Render.com account (free tier available)
- Gmail account for SMTP (contact form functionality)

## Deployment Steps

### 1. Prepare Environment Variables
Before deploying, you'll need to set up environment variables for the backend email service:

**Required Environment Variables:**
- `SMTP_USER`: Your Gmail address (e.g., amanuelmark747@gmail.com)
- `SMTP_PASS`: Gmail App Password (not your regular password)
- `CONTACT_EMAIL`: Email where contact form submissions will be sent

**To create Gmail App Password:**
1. Go to Google Account settings
2. Enable 2-Factor Authentication
3. Go to Security → App Passwords
4. Generate a new app password for "Mail"
5. Use this 16-character password as `SMTP_PASS`

### 2. Deploy Backend API Service

1. **Login to Render.com**
   - Go to https://render.com
   - Sign up/Login with GitHub

2. **Create New Web Service**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository: `aman-4848/my-Portfolio`
   - Choose "Deploy from a Git repository"

3. **Configure Backend Service**
   - **Name**: `my-portfolio-api`
   - **Environment**: `Node`
   - **Region**: Choose closest to your users
   - **Branch**: `main`
   - **Root Directory**: `server`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`

4. **Set Environment Variables**
   - Go to Environment tab
   - Add the following variables:
     ```
     NODE_ENV=production
     SMTP_HOST=smtp.gmail.com
     SMTP_PORT=587
     SMTP_SECURE=false
     SMTP_USER=your-gmail@gmail.com
     SMTP_PASS=your-app-password
     CONTACT_EMAIL=amanuelmark747@gmail.com
     ```

5. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment to complete
   - Note the service URL (e.g., `https://my-portfolio-api.onrender.com`)

### 3. Deploy Frontend Static Site

1. **Create New Static Site**
   - Click "New +" → "Static Site"
   - Connect same GitHub repository: `aman-4848/my-Portfolio`

2. **Configure Frontend Service**
   - **Name**: `my-portfolio-frontend`
   - **Branch**: `main`
   - **Root Directory**: Leave empty (root)
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`

3. **Deploy**
   - Click "Create Static Site"
   - Wait for deployment to complete
   - Your portfolio will be live at the provided URL

### 4. Update Frontend API Configuration

After backend deployment, update your frontend to use the backend API URL:

1. **Update API calls in your React components**
   - Replace any localhost URLs with your Render backend URL
   - Example: `https://my-portfolio-api.onrender.com/api/contact`

2. **Redeploy Frontend**
   - Push changes to GitHub
   - Render will automatically redeploy

### 5. Custom Domain (Optional)

1. **For Static Site:**
   - Go to Settings → Custom Domains
   - Add your domain (e.g., `amanuel-portfolio.com`)
   - Update DNS records as instructed

2. **For API Service:**
   - Add custom domain for API if needed
   - Update CORS settings in backend if using custom domain

## Troubleshooting

### Common Issues:

1. **Build Failures:**
   - Check build logs in Render dashboard
   - Ensure all dependencies are in package.json
   - Verify Node.js version compatibility

2. **Email Not Working:**
   - Verify Gmail App Password is correct
   - Check environment variables are set
   - Test with a simple email first

3. **CORS Errors:**
   - Update CORS configuration in server/index.js
   - Add your frontend domain to allowed origins

4. **Free Tier Limitations:**
   - Services sleep after 15 minutes of inactivity
   - First request after sleep may be slow
   - Consider upgrading for production use

## Monitoring

- **Logs**: Available in Render dashboard
- **Metrics**: Monitor response times and errors
- **Alerts**: Set up notifications for downtime

## Security Checklist

- ✅ Environment variables are secure
- ✅ No sensitive data in repository
- ✅ CORS properly configured
- ✅ HTTPS enabled (automatic on Render)
- ✅ Input validation on contact form

## Next Steps

1. Test all functionality after deployment
2. Set up monitoring and alerts
3. Consider adding analytics
4. Plan for scaling if needed

Your portfolio should now be live and fully functional on Render.com!
