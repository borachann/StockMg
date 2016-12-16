package com.rean.spring.hibernate.controllers;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

@Controller
@RequestMapping(value="admin/fileupload")
public class FileUploadController {
	@RequestMapping(value="/images", method = RequestMethod.POST)
	public ResponseEntity<Map<String, Object>> addNewImages(@RequestParam("imgurl") MultipartFile file, HttpServletRequest request){
		
		String filename = "";
		Map<String, Object> map = new HashMap<String, Object>();
		if(!file.isEmpty()){
			try{
				filename = file.getOriginalFilename();
				byte[] bytes = file.getBytes();
				UUID uuid = UUID.randomUUID();
				String randomUUIDFileName = uuid.toString();
				String extension = filename.substring(filename.lastIndexOf(".") +1);
				String savePath = request.getSession().getServletContext().getRealPath("/resources/images/products/");
				File path = new File(savePath);
				if(!path.exists()){
					path.mkdirs();
				}
				filename = randomUUIDFileName + "." + extension;
				BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(new File(savePath + File.separator + filename)));
				stream.write(bytes);
				stream.close();
				map.put("MESSAGE", "SUCCESSFULLY");
				map.put("ERROR", HttpStatus.OK.value());
				map.put("IMAGE", filename);
				return new ResponseEntity<Map<String, Object>>(map,  HttpStatus.OK);
			}catch(Exception e){
				System.out.println(e.getMessage());
				map.put("MESSAGE", "ERROR " + e.getMessage());
        		map.put("ERROR", HttpStatus.INTERNAL_SERVER_ERROR.value());
        		map.put("IMAGE", filename);
        		return new ResponseEntity<Map<String, Object>>(map, HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}else {
            System.out.println("You failed to upload " + filename + " because the file was empty.");
    		map.put("MESSAGE", "UNSUCCESSFULLY");
    		map.put("ERROR", HttpStatus.NOT_FOUND.value());
    		map.put("IMAGE", filename);
    		return new ResponseEntity<Map<String, Object>>(map, HttpStatus.NOT_FOUND);
        }
	}
}
